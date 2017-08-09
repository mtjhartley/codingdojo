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

        public TrailController(TrailFactory tf)
        {
            trailfactory = tf;
        }


        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            ViewBag.allTrails = trailfactory.GetAllTrails();
            return View();
        }

        [HttpGet]
        [Route("/length")]
        public IActionResult SortedIndex(string sort="length")
        {
            ViewBag.allTrails = trailfactory.GetAllTrails(sort);
            return View("Index");
        }
        [HttpGet]
        [Route("/elevation")]
        public IActionResult SortedElevationIndex(string sort="elevation")
        {
            ViewBag.allTrails = trailfactory.GetAllTrails(sort);
            return View("Index");
        }

        [HttpGet]
        [Route("new_trail")]
        public IActionResult NewTrail()
        {
            return View();
        }

        [HttpPost]
        [Route("add_trail")]
        public IActionResult AddTrail(Trail trail)
        {
            if (ModelState.IsValid)
            {
                System.Console.WriteLine("Valid!");
                System.Console.WriteLine(trail.Name);
                System.Console.WriteLine(trail.Description);
                trailfactory.AddNewTrail(trail);
                return RedirectToAction("Index");
            }
            else {
                System.Console.WriteLine("Not Valid!");
                return View("NewTrail");
            }
        }

        [HttpGet]
        [Route("trail/{id}")]
        public IActionResult ViewTrail(long id)
        {
            List<Trail> oneTrail = trailfactory.ViewOneTrail(id);
            System.Console.WriteLine(oneTrail);
            ViewBag.OneTrail = oneTrail[0];
            return View("OneTrail");
        }
    }
}