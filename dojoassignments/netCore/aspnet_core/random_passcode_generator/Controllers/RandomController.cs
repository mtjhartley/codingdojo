using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
 
namespace random_passcode_generator.Controllers
{
    public class RandomController : Controller
    {
        [HttpGetAttribute]
        [Route("")]
        public IActionResult Index()
        {
            int? RunCount = HttpContext.Session.GetInt32("RunCount");
            if(RunCount == null)
                {
                    RunCount = 0;
                }
            RunCount++;

            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var stringChars = new char[14];
            Random rand = new Random();

            for (int i = 0; i < stringChars.Length; i++)
            {
                stringChars[i] = chars[rand.Next(chars.Length)];
            }
            string finalString = new String(stringChars);

            System.Console.WriteLine(finalString);

            ViewBag.Password = finalString;
            ViewBag.RunCount = RunCount;

            HttpContext.Session.SetInt32("RunCount", (int)RunCount);

            return View();

        }
        [HttpGet]
        [Route("clear")]
        public IActionResult Clear()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
    }
}
