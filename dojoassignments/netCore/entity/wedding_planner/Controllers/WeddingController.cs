using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using wedding_planner.Models;

namespace wedding_planner.Controllers
{
    public class WeddingController : Controller
    {
        private WeddingContext _context;
        public WeddingController(WeddingContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("dashboard")]
        public IActionResult Dashboard()
        {
            int? loggedUserInt = HttpContext.Session.GetInt32("UserId");
            if (loggedUserInt == null)  
            {
                return RedirectToAction("Register", "User");
            }
            ViewBag.UserName = HttpContext.Session.GetString("UserName");
            ViewBag.UserId = HttpContext.Session.GetInt32("UserId");
            List <Wedding> Weddings = _context.Weddings.Include(wedding => wedding.User)
                                                        .Include(wedding => wedding.Attendees)
                                                        .ThenInclude(attendee => attendee.User).ToList();
            ViewBag.Weddings = Weddings;
            System.Console.WriteLine(Weddings[0].SpouseOne);
            return View();
        }

        [HttpGet]
        [Route("new_wedding")]
        public IActionResult NewWedding()
        {
            int? loggedUserInt = HttpContext.Session.GetInt32("UserId");
            if (loggedUserInt == null)  
            {
                return RedirectToAction("Register", "User");
            }
            ViewBag.UserName = HttpContext.Session.GetString("UserName");
            return View();
        }

        [HttpPost]
        [Route("new_wedding")]
        public IActionResult AddWedding(Wedding wedding)
        {
            int? loggedUserId = HttpContext.Session.GetInt32("UserId");
            wedding.UserId = (int)loggedUserId;
            wedding.CreatedAt = DateTime.Now;
            wedding.UpdatedAt = DateTime.Now;

            _context.Add(wedding);
            _context.SaveChanges();

            return RedirectToAction("Dashboard");
        }

        [HttpGet]
        [Route("wedding/{WeddingId}")]
        public IActionResult OneWedding(int WeddingId)
        {
            Wedding thisWedding = _context.Weddings.Include(wedding => wedding.Attendees)
                                                    .ThenInclude(attendee => attendee.User)
                                                    .SingleOrDefault(wedding => wedding.WeddingId == WeddingId);
            ViewBag.Wedding = thisWedding;
            return View();
        }

        [HttpGet]
        [Route("wedding/delete/{WeddingId}")]
        public IActionResult DeleteWedding(int WeddingId)
        {
            int? loggedUserId = HttpContext.Session.GetInt32("UserId");
            Wedding thisWedding = _context.Weddings.SingleOrDefault(wedding => wedding.WeddingId == WeddingId);
            if (thisWedding.UserId == loggedUserId)
            {
                _context.Weddings.Remove(thisWedding);
                _context.SaveChanges();
            }
            return RedirectToAction("Dashboard");

        }
        [HttpGet]
        [Route("wedding/rsvp/{WeddingId}")]

        public IActionResult RSVPWedding(int WeddingId)
        {
            int? loggedUserId = HttpContext.Session.GetInt32("UserId");
            Wedding thisWedding = _context.Weddings.SingleOrDefault(wedding => wedding.WeddingId == WeddingId);

            Invitation newInvitation = new Invitation
            {
                UserId = (int)loggedUserId,
                WeddingId = thisWedding.WeddingId,
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now
            };

            _context.Invitations.Add(newInvitation);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        [HttpGet]
        [Route("wedding/unrsvp/{WeddingId}")]
        public IActionResult UnRSVPWedding(int WeddingId)
        {
            int? loggedUserId = HttpContext.Session.GetInt32("UserId");
            Wedding thisWedding = _context.Weddings.SingleOrDefault(wedding => wedding.WeddingId == WeddingId);
            
            Invitation RetrievedInvitation = _context.Invitations.SingleOrDefault(invitation => invitation.WeddingId == WeddingId && invitation.UserId == (int)loggedUserId);
            _context.Remove(RetrievedInvitation);
            _context.SaveChanges();

            return RedirectToAction("Dashboard");


        }
    }
}