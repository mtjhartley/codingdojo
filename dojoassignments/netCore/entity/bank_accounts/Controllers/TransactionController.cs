using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using bank_accounts.Models;

namespace bank_accounts.Controllers
{
    public class TransactionController: Controller
    {
        private BanksContext _context;

        public TransactionController(BanksContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("account/{UserId}")]
        public IActionResult Account(int UserId)
        {
            int? loggedUserInt = ViewBag.User = HttpContext.Session.GetInt32("UserId");
            string loggedUserName = ViewBag.User = HttpContext.Session.GetString("FirstName");
            if (UserId != loggedUserInt)
            {
                return RedirectToAction("Register", "User");
            }
            ViewBag.UserName = loggedUserName;
            ViewBag.UserId = loggedUserInt;

            List <Transaction> Transactions = _context.Transactions.Where(transaction => transaction.UserId == loggedUserInt).ToList();
            ViewBag.Transactions = Transactions;
            double totalMoney = 0.00;
            foreach (var transaction in Transactions)
            {
                totalMoney += transaction.Amount;
            }
            ViewBag.Money = totalMoney;
            // ViewBag.Transactions = 
            return View();
        }

        [HttpPost]
        [Route("handle_transaction")]
        public IActionResult HandleTransaction(double amount)
        {

            int? loggedUserInt = ViewBag.User = HttpContext.Session.GetInt32("UserId");
            string loggedUserName = ViewBag.User = HttpContext.Session.GetString("FirstName");

            Transaction newTransaction = new Transaction
            {
                Amount = amount,
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now,
                UserId = (int)loggedUserInt
            };
            _context.Add(newTransaction);
            _context.SaveChanges();
            return RedirectToAction("Account", new { UserId = loggedUserInt});
        }
    }
}
