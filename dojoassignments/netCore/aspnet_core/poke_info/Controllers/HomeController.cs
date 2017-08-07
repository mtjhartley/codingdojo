using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace poke_info.Controllers
{
    public class HomeController : Controller
    {
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("pokemon/{pokeid}")]
        public IActionResult QueryPoke(int pokeid)
        {
            var PokeInfo = new Pokemon();
            WebRequest.GetPokemonDataAsync(pokeid, ApiResponse =>
            {
                PokeInfo = ApiResponse;
            }).Wait();
            // System.Console.WriteLine(PokeInfo);
            // Pokemon PokeData = new Pokemon()
            ViewBag.Pokemon = PokeInfo;
            return View();
            // return View();
        }
    }
}
