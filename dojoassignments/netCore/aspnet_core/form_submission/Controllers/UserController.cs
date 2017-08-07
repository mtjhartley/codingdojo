using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using form_submission.Models;

namespace form_submission.Controllers
{
    public class UserController : Controller
    {
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index(string first_name, string last_name, int age, string email, string password)
        {
            ViewBag.errors = new List<string>();

            return View("Index");
        }

        [HttpPost]
        [Route("add_user")]
        public IActionResult AddUser(string first_name, string last_name, int age, string email, string password)
        {
            User newUser = new User
            {
                firstName = first_name,
                lastName = last_name,
                age = age,
                email = email,
                password = password
            };
            TryValidateModel(newUser);
            System.Console.WriteLine("THESE ARE THE USERS ERRORS");
            System.Console.WriteLine(ModelState.Values);
            ViewBag.errors = ModelState.Values;

            foreach (var error in ViewBag.errors)
            {
                if(error.Errors.Count > 0)
                {
                    return View("Index");
                }
            }

            return View("Success");
        }
    }
}