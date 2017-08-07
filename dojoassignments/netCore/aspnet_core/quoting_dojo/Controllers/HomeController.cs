using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using DbConnection;

namespace quoting_dojo.Controllers
{



    public class HomeController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return RedirectToAction("Quotes");
        }

        // GET: /Home/
        [HttpGet]
        [Route("quotes")]
        public IActionResult Quotes()
        {
            string query = "SELECT * FROM quotes";
            var allQuotes = DbConnector.Query(query);
            System.Console.WriteLine("*******************************");
            System.Console.WriteLine(allQuotes);
            System.Console.WriteLine("*******************************");
            ViewBag.Quotes = allQuotes;
            return View();
        }
        [HttpPost]
        [Route("quotes")]
        public IActionResult AddQuote(string name, string quote)
        {
            string query = $"INSERT INTO QUOTES (name, quote, created_at, updated_at) VALUES ('{name}', '{quote}', NOW(), NOW())";
            DbConnector.Execute(query);
            return Redirect("Quotes");
        }
    }
}
