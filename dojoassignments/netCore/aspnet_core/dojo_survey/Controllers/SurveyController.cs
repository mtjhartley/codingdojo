using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
 
namespace dojo_survey.Controllers
{
    public class SurveyController : Controller
    {
        [HttpGetAttribute]
        [Route("")]
        public IActionResult Index()
        {
            ViewBag.Errors = new List<string>();
            return View();
        }

        [HttpPost]
        [Route("handle_submit")]
        public IActionResult HandleSubmit(string name, string location, string language, string comment)
        {
            ViewBag.Errors = new List<string>();

            if(name == null)
            {
                ViewBag.Errors.Add("Name cannot be empty");
            }

            if(location == null)
            {
                ViewBag.Errors.Add("Location cannot be empty");
            }

            if(language == null)
            {
                ViewBag.Errors.Add("Language cannot be empty");
            }

            System.Console.WriteLine(name);
            ViewBag.Name = name;
            ViewBag.Location = location;
            ViewBag.Language = language;
            ViewBag.Comment = comment;

            if (ViewBag.Errors.Count > 0)
            {
                return View("Index");
            }
            else {
                return View("Success");
            }
        }
    }
}