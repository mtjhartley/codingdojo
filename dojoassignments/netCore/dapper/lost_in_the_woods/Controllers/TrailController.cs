using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using lost_in_the_woods.Models;
using lost_in_the_woods.Factories;

namespace lost_in_the_woods.Controllers
{
    public class TrailController: Controller
    {
        private readonly TrailFactory trailfactory;

        public TrailController()
        {
            trailfactory = new TrailFactory();
        }


        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            ViewBag.allTrails = trailfactory.GetAllTrails();
            return View();
        }
        public IActionResult AddTrail(Trail trail)
        {
            System.Console.WriteLine(trail.Name);
            System.Console.WriteLine(trail.Description);
            trailfactory.AddNewTrail(trail);
            return RedirectToAction("Index");
        }
    }
}