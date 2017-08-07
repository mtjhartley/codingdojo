using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace dojodachi.Controllers
{
    public class DachiController : Controller
    {
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            if(HttpContext.Session.GetObjectFromJson<Dachi>("Dojodachi") == null)
            {
                HttpContext.Session.SetObjectAsJson("Dojodachi", new Dachi());
            }

            ViewBag.Dojodachi = HttpContext.Session.GetObjectFromJson<Dachi>("Dojodachi");
            ViewBag.Message = "Say hi to your new dojodachi!";
            ViewBag.GameStatus = "running";
            ViewBag.Reaction = "";
            return View();
        }

        [HttpPost]
        [Route("performAction")]
        public IActionResult PerformAction(string action)
        {
            Dachi EditDachi = HttpContext.Session.GetObjectFromJson<Dachi>("Dojodachi");
            Random RandObject = new Random();
            ViewBag.GameStatus = "running";
            switch(action)
            {
                case "feed":
                    EditDachi.turnCount += 1;
                    if(EditDachi.meals > 0){
                        EditDachi.meals -= 1;
                        if(RandObject.Next(0, 4) > 0)
                        {
                            EditDachi.fullness += RandObject.Next(5, 11);
                            ViewBag.Reaction = ":)";
                            ViewBag.Message = "Dojodachi enjoyed the meal!";
                        }
                        else
                        {
                            ViewBag.Reaction = ":(";
                            ViewBag.Message = "Dojodachi didn't like the food very much...";
                        }
                    }
                    else
                    {
                        ViewBag.Reaction = ":(";
                        ViewBag.Message = "You don't have any food for your Dojodachi!";
                    }
                    break;
                case "play":
                    EditDachi.turnCount += 1;
                    if(EditDachi.energy > 4)
                    {
                        EditDachi.energy -= 5;
                        if(RandObject.Next(0, 4) > 0)
                        {
                            EditDachi.happiness += RandObject.Next(5, 11);
                            ViewBag.Reaction = ":)";
                            ViewBag.Message = "Dojodachi had fun playing!";
                        }
                        else
                        {
                            ViewBag.Reaction = ":(";
                            ViewBag.Message = "Looks like Dojodachi didn't want to play...";
                        }
                    }
                    else
                    {
                        ViewBag.Reaction = ":(";
                        ViewBag.Message = "Not enough energy...";
                    }

                    break;
                case "work":
                    EditDachi.turnCount += 1;
                    if(EditDachi.energy > 4)
                    {
                        EditDachi.energy -= 5;
                        EditDachi.meals += RandObject.Next(1, 4);
                        ViewBag.Reaction = ":)";
                        ViewBag.Message = "You worked hard to feed your Dojodachi!";
                    }
                    else
                    {
                        ViewBag.Reaction = ":(";
                        ViewBag.Message = "Not enough energy...";
                    }
                    break;
                case "sleep":
                    EditDachi.turnCount += 1;
                    EditDachi.energy += 15;
                    EditDachi.fullness -= 5;
                    EditDachi.happiness -= 5;
                    ViewBag.Reaction = ":)";
                    ViewBag.Message = "Dojodachi seems well rested.";
                    break;
                default:
                    // Handle unxpected values submitted from form
                    ViewBag.Reaction = "XXXXXXXXXXXXXX";
                    ViewBag.Message = "There's a glitch in the martix...";
                    break;

            }
            if(EditDachi.fullness < 1 || EditDachi.happiness < 1)
            {
                ViewBag.Reaction = "X(";
                ViewBag.Message = "Oh no! Your Dojodachi has died...";
                ViewBag.GameStatus = "over";
            }
            else if(EditDachi.fullness > 99 && EditDachi.happiness > 99)
            {
                ViewBag.Reaction = ":D";
                ViewBag.Message = $"Congratulations! You won in {EditDachi.turnCount} turns!";
                ViewBag.GameStatus = "over";
            }
            HttpContext.Session.SetObjectAsJson("Dojodachi", EditDachi);
            ViewBag.Dojodachi = EditDachi;
            return View("Index");
        }

        [HttpGet]
        [Route("reset")]
        public IActionResult Reset()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
    }

    public static class SessionExtensions
    {
        public static void SetObjectAsJson(this ISession session, string key, object value)
        {
            session.SetString(key, JsonConvert.SerializeObject(value));
        }
        public static T GetObjectFromJson<T>(this ISession session, string key)
        {
            var value = session.GetString(key);
            return value == null ? default(T) : JsonConvert.DeserializeObject<T>(value);
        }
    }
}