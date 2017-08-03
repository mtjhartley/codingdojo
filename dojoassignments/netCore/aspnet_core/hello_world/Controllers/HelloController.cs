using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
namespace hello_world.Controllers
{
    public class HelloController : Controller
    {
        [HttpGetAttribute]
        [Route("index")]
        public string Index()
        {
            return "Hello Za Warudo!";
        }

        [HttpGet]
        [Route("displayint")]
        public JsonResult DisplayInt()
        {
            return Json(34);
        }

        [HttpGet]
        [Route("displayanonymousobject")]
        public JsonResult DisplayAnonymousObject()
        {
            var AnonObject = new {
                            FirstName = "Raz",
                            LastName = "Aquato",
                            Age = 10
                            };
            return Json(AnonObject);
        }

        // [HttpGet]
        // [Route("displayobject")]
        // public JsonResult DisplayObject()
        // {
        //     return Json(new Human());
        // }

        // [HttpPost]
        // [Route("")]
        // public IActionResult Other()
        // {
        //     //return a view!
        // }
    }
}