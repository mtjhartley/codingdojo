using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using auctions.Models;

namespace auctions.Controllers
{
    public class UserController: Controller
    {
        private AuctionContext _context;
        public UserController(AuctionContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("")]
        public IActionResult Register()
        {
            ViewBag.Errors = new List<string>();
            return View();
        }

        [HttpPost]
        [Route("register")]
        public IActionResult HandleRegister(RegisterViewModel model)
        {
            if(ModelState.IsValid)
            {
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                User NewUser = new User
                {
                    UserName = model.UserName,
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    CreatedAt = DateTime.Now,
                    UpdatedAt = DateTime.Now
                };
                double newWallet = 1000.00;
                NewUser.Wallet = newWallet;
                NewUser.Password = Hasher.HashPassword(NewUser, model.Password);
                
                _context.Add(NewUser);
                _context.SaveChanges();
                //query the database 
                //hash teh password 
                User justEnteredPerson = _context.users.SingleOrDefault(user => user.UserName == model.UserName);
                HttpContext.Session.SetString("UserName", justEnteredPerson.FirstName);
                HttpContext.Session.SetInt32("UserId", justEnteredPerson.UserId);

                // return RedirectToAction("Success");
                return RedirectToAction("CashOut", "Auction");
                // return RedirectToAction("Account", "Transaction", new { UserId = justEnteredPerson.UserId}); //change this line!
                //add the new user to the database!
            }
            System.Console.WriteLine("Not Valid!");
            ViewBag.Errors = new List<string>();
            return View("Register");
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login(string UserName, string PasswordToCheck)
        {
            User loggedUser = _context.users.SingleOrDefault(user => user.UserName == UserName);
            // System.Console.WriteLine(loggedUser);
            // System.Console.WriteLine(loggedUser.Email);
            if (loggedUser != null && PasswordToCheck != null)
            {
                var Hasher = new PasswordHasher<User>();
                if (0 != Hasher.VerifyHashedPassword(loggedUser, loggedUser.Password, PasswordToCheck))
                {
                    HttpContext.Session.SetString("UserName", loggedUser.FirstName);
                    HttpContext.Session.SetInt32("UserId", loggedUser.UserId);
                    return RedirectToAction("CashOut", "Auction"); //change this line!
                    // return RedirectToAction("Success");
                }
            }
            // System.Console.WriteLine(loggedUser.Password);
            // System.Console.WriteLine(PasswordToCheck);
        
            ViewBag.Errors = new List<string>();
            ViewBag.Errors.Add("Invalid Login Credentials.");
            return View("Register");
        }

        [HttpGet]
        [Route("success")]
        public IActionResult Success()
        {
            ViewBag.UserName = HttpContext.Session.GetString("UserName");
            return View();
        }

        [HttpGet]
        [Route("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Register");
        }

    }
}
