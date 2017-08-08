using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using the_wall.Models;


namespace the_wall.Controllers
{
    public class UserController: Controller
    {
        private readonly DbConnector _dbConnector;
        public UserController(DbConnector connect)
        {
            _dbConnector = connect;
        }

        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            ViewBag.Errors = new List<string>();
            return View();
        }

        [HttpPost]
        [Route("register")]
        public IActionResult Register(User newUser)
        {
            if (ModelState.IsValid)
            {
                System.Console.WriteLine("User is valid!");
                string query = $"INSERT INTO users (FirstName, LastName, Email, Password, CreatedAt, UpdatedAt) VALUES ('{newUser.FirstName}', '{newUser.LastName}', '{newUser.Email}', '{newUser.Password}', NOW(), NOW())";
                //add to db code
                _dbConnector.Execute(query);
                //makeshift session code
                string userQuery = "SELECT * FROM users ORDER BY Id DESC LIMIT 1";
                var loggedUser = _dbConnector.Query(userQuery);
                string userName = (string)loggedUser[0]["FirstName"];
                int UserId = (int)loggedUser[0]["id"];
                System.Console.WriteLine(userName);
                HttpContext.Session.SetString("UserName", userName);
                HttpContext.Session.SetInt32("UserId", UserId);

                return RedirectToAction("Success");
            }
            System.Console.WriteLine("User is NOT VALID");
            return View("Index");
        
        }
        [HttpPost]
        [Route("login")]
        public IActionResult Login(string Email, string Password)
        {
            string query = $"SELECT * FROM users WHERE (Email='{Email}' AND Password='{Password}')";
            var loggedUser = _dbConnector.Query(query);
            if (loggedUser.Count > 0)
            {
                System.Console.WriteLine("Found the user!");
                string userName = (string)loggedUser[0]["FirstName"];
                int UserId = (int)loggedUser[0]["id"];
                HttpContext.Session.SetString("UserName", userName);
                HttpContext.Session.SetInt32("UserId", UserId);
                return RedirectToAction("Success");
            }
            else {
                System.Console.WriteLine("Couldn't find the user!");
                ViewBag.Errors = new List<string>{
                    "Invalid name or password"
                };
                return View("Index");
            }
            
        }
        [HttpGet]
        [Route("success")]
        public IActionResult Success()
        {
            string LoggedUserName = HttpContext.Session.GetString("UserName");
            int? LoggedUserId = HttpContext.Session.GetInt32("UserId");

            System.Console.WriteLine("****************");
            System.Console.WriteLine(LoggedUserName);
            System.Console.WriteLine(LoggedUserId);
            System.Console.WriteLine("****************");
            ViewBag.Name = LoggedUserName;
            ViewBag.Id = LoggedUserId;
            return RedirectToAction("Index", "Wall");

            // return View();
        }

    }
}