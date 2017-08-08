using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using the_wall.Models;

namespace the_wall.Controllers
{
public class WallController: Controller
    {
        private readonly DbConnector _dbConnector;
        public WallController(DbConnector connect)
        {
            _dbConnector = connect;
        }

        [HttpGet]
        [Route("wall")]
        public IActionResult Index()
        {
            string LoggedUserName = HttpContext.Session.GetString("UserName");
            int? LoggedUserId = HttpContext.Session.GetInt32("UserId");
            if (LoggedUserId != null)
            {
                ViewBag.Name = LoggedUserName;
                ViewBag.Id = LoggedUserId;
                ViewBag.Errors = new List<string>();

                string query = $"SELECT messages.Id, messages.Message, messages.CreatedAt, messages.UserId, users.FirstName FROM messages JOIN users ON messages.UserId=users.id";
                var messages = _dbConnector.Query(query);
                ViewBag.Messages = messages;

                string commentQuery = $"SELECT comments.Id, comments.Comment, comments.CreatedAt, comments.MessageId, comments.UserId, users.FirstName from comments JOIN users on comments.UserId=users.id";
                var comments = _dbConnector.Query(commentQuery);
                ViewBag.Comments = comments;


                return View();
            }
            else {
                return RedirectToAction("Index", "User");
            }
        }

        [HttpPost]
        [Route("create_message")]
        public IActionResult CreateMessage(string Message)
        {
            System.Console.WriteLine(Message);
            int? LoggedUserId = HttpContext.Session.GetInt32("UserId");
            string query = $"INSERT INTO messages (Message, CreatedAt, UpdatedAt, UserId) VALUES ('{Message}', NOW(), NOW(), {LoggedUserId})";
            _dbConnector.Execute(query);

            return RedirectToAction("Index");
        }

        [HttpPost]
        [Route("create_comment")]
        public IActionResult CreateComment(string Comment, int MessageId)
        {
            System.Console.WriteLine(Comment);
            System.Console.WriteLine(MessageId);
            int? LoggedUserId = HttpContext.Session.GetInt32("UserId");
            string query = $"INSERT INTO comments (Comment, CreatedAt, UpdatedAt, UserId, MessageId) VALUES ('{Comment}', NOW(), NOW(), {LoggedUserId}, {MessageId})";
            System.Console.WriteLine(query);
            _dbConnector.Execute(query);
            return RedirectToAction("Index");
        }


    }
}