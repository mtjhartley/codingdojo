using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace time_display.Controllers
{
    public class TimeController : Controller
    {
        [HttpGetAttribute]
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }
    }
}