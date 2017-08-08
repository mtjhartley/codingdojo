using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using login_registration.Models;


namespace login_registration.Controllers
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
            return View();
        }

        [HttpPost]
        [Route("register")]
        public IActionResult Register(User newUser)
        {
            if (ModelState.IsValid)
            {
                System.Console.WriteLine("User is valid!");
                string query = $"INSERT INTO users (first_name, last_name, email, password) VALUES ('{newUser.FirstName}', '{newUser.LastName}', '{newUser.Email}', '{newUser.Password}')";
                _dbConnector.Execute(query);
                //add to db code
                return RedirectToAction("Success");
            }
            System.Console.WriteLine("User is NOT VALID");
            return View("Index");
        
        }
        [HttpPost]
        [Route("login")]
        public IActionResult Login(string Email, string Password)
        {
            string query = $"SELECT * FROM users WHERE (email='{Email}' AND password='{Password}')";
            var loggedUser = _dbConnector.Query(query);
            if (loggedUser.Count > 0)
            {
                System.Console.WriteLine("Found the user!");
                return RedirectToAction("Success");
            }
            else {
                System.Console.WriteLine("Couldn't find the user!");
                return RedirectToAction("Index");
            }
            

        }
        [HttpGet]
        [Route("success")]
        public IActionResult Success()
        {
            return View();
        }

    }
}