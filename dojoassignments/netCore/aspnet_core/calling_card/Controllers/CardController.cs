using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace calling_card.Controllers
{
    public class CardController : Controller
    {
        [HttpGetAttribute]
        [Route("index")]

        public string Index()
        {
            return "Hello Calling Card!";
        }

        [HttpGet]
        [Route("")]
        public JsonResult CallingCard()
        {
            var AnonObject = new {
                                FirstName = "Michael",
                                LastName = "Hartley",
                                Age = 23,
                                favoriteColor = "Green"
            };
            return Json(AnonObject);
        }

        [Route("card/{FirstName}/{LastName}/{Age}/{FavoriteColor}")]
        public JsonResult ViewCallingCard(string FirstName, string LastName, int Age, string FavoriteColor)
        {
            return Json( new {FirstName = FirstName, LastName = LastName, Age=Age, FavoriteColor = FavoriteColor});
        }
    }
}