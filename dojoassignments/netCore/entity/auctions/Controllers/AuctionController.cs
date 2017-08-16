using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using auctions.Models;

namespace auctions.Controllers
{
    public class AuctionController: Controller
    {
        private AuctionContext _context;
        public AuctionController(AuctionContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("auctions")]
        public IActionResult AllAuctions()
        {
            int? loggedUserInt = HttpContext.Session.GetInt32("UserId");
            if (loggedUserInt == null)  
            {
                return RedirectToAction("Register", "User");
            }
            User thisUser = _context.users.SingleOrDefault(user => user.UserId == (int)loggedUserInt);

            ViewBag.UserName = HttpContext.Session.GetString("UserName");
            ViewBag.UserId = HttpContext.Session.GetInt32("UserId");
            ViewBag.Auctions = _context.auctions.Where(auction => auction.EndDate > DateTime.Now).Include(auction => auction.User).ToList().OrderBy(auction => auction.EndDate);
            ViewBag.User = thisUser;

            return View();
        }

        [HttpGet]
        [Route("new_auction")]
        public IActionResult NewAuction()
        {
            int? loggedUserInt = HttpContext.Session.GetInt32("UserId");
            if (loggedUserInt == null)  
            {
                return RedirectToAction("Register", "User");
            }
            ViewBag.UserName = HttpContext.Session.GetString("UserName");
            ViewBag.UserId = HttpContext.Session.GetInt32("UserId");
            
            ViewBag.Errors = new List<string>();
            return View();
        }

        [HttpPost]
        [Route("new_auction")]
        public IActionResult HandleNewAuction(AuctionViewModel model)
        {
            int? loggedUserInt = HttpContext.Session.GetInt32("UserId");
            if (loggedUserInt == null)  
            {
                return RedirectToAction("Register", "User");
            }
            ViewBag.UserName = HttpContext.Session.GetString("UserName");
            ViewBag.UserId = HttpContext.Session.GetInt32("UserId");
            ViewBag.Errors = new List<string>();
            if(ModelState.IsValid)
            {
                // if(true)
                if(model.EndDate > DateTime.Now)
                {
                    ViewBag.UserId = HttpContext.Session.GetInt32("UserId");
                    Auction newAuction = new Auction
                    {
                        ProductName = model.ProductName,
                        Description = model.Description,
                        StartingBid = model.StartingBid,
                        HighestBid = model.StartingBid,
                        EndDate = model.EndDate,
                        CreatedAt = DateTime.Now,
                        UpdatedAt = DateTime.Now,
                        UserId = ViewBag.UserId,
                    };
                    _context.Add(newAuction);
                    _context.SaveChanges();
                    return RedirectToAction("AllAuctions");
                }
                ViewBag.Errors.Add("Date can not be in the past!");
                return View("NewAuction");
            }
            return View("NewAuction");
        }

        [HttpGet]
        [Route("auction/{AuctionId}")]
        public IActionResult OneAuction(int AuctionId)
        {
            int? loggedUserInt = HttpContext.Session.GetInt32("UserId");
            if (loggedUserInt == null)  
            {
                return RedirectToAction("Register", "User");
            }
            ViewBag.UserName = HttpContext.Session.GetString("UserName");
            ViewBag.UserId = HttpContext.Session.GetInt32("UserId");
            ViewBag.Errors = new List<string>();

            User thisUser = _context.users.SingleOrDefault(user => user.UserId == (int)loggedUserInt);


            Auction thisAuction = _context.auctions.Include(auction => auction.User).SingleOrDefault(auction => auction.AuctionId == AuctionId);
            ViewBag.Auction = thisAuction;
            TimeSpan span = ViewBag.Auction.EndDate.Subtract(DateTime.Now);
            System.Console.WriteLine(span.GetType());
            // String timeString = span.ToString("h" + " hours");
            // System.Console.WriteLine(timeString);

            String timeString2 = new DateTime(span.Ticks).ToString("dd");
            System.Console.WriteLine(timeString2);
            ViewBag.TimeRemaining = timeString2;
            ViewBag.User = thisUser;

            //code to get the highest bid 
            Bid biggestBidInfo = _context.bids.Where(bid => bid.AuctionId == AuctionId).Include(bid => bid.User).OrderByDescending(bid => bid.Amount).FirstOrDefault();
            // System.Console.WriteLine(biggestBidInfo.User.FirstName);
            ViewBag.BiggestBid = biggestBidInfo;
            return View();

        }
        [HttpPost]
        [Route("make_bid")]
        public IActionResult MakeBid(int AuctionId, double yourBid)
        {
            System.Console.WriteLine("THIS IS THE BID");
            System.Console.WriteLine(yourBid);
            System.Console.WriteLine("THIS IS THE AUCTION ID");
            System.Console.WriteLine(AuctionId);
            int? loggedUserInt = HttpContext.Session.GetInt32("UserId");
            if (loggedUserInt == null)  
            {
                return RedirectToAction("Register", "User");
            }
            ViewBag.UserName = HttpContext.Session.GetString("UserName");
            ViewBag.UserId = HttpContext.Session.GetInt32("UserId");
            ViewBag.Errors = new List<string>();
            // System.Console.WriteLine(Bid);
            User thisUser = _context.users.SingleOrDefault(user => user.UserId == (int)loggedUserInt);
            Auction thisAuction = _context.auctions.Include(auction => auction.User).SingleOrDefault(auction => auction.AuctionId == AuctionId);
            ViewBag.Auction = thisAuction;
            ViewBag.User = thisUser;
            Bid biggestBidInfo = _context.bids.Where(bid => bid.AuctionId == AuctionId).Include(bid => bid.User).OrderByDescending(bid => bid.Amount).FirstOrDefault();
            // System.Console.WriteLine(biggestBidInfo.User.FirstName);
            ViewBag.BiggestBid = biggestBidInfo;
            TimeSpan span = ViewBag.Auction.EndDate.Subtract(DateTime.Now);
            String timeString2 = new DateTime(span.Ticks).ToString("dd");
            System.Console.WriteLine(timeString2);
            ViewBag.TimeRemaining = timeString2;
            //if bid is too low, which shouldn't happen
            if ((double)thisAuction.HighestBid >= (double)yourBid)
            {
                System.Console.WriteLine("first conditional");
                System.Console.WriteLine("This is the highest bid currently");
                System.Console.WriteLine(thisAuction.HighestBid);
                System.Console.WriteLine("This is your bid");
                System.Console.WriteLine(yourBid);

                ViewBag.Errors.Add("Your bid is too low!");
                return View("OneAuction");
            }
            else if (yourBid > thisUser.Wallet)
            {
                System.Console.WriteLine("second conditional");
                ViewBag.Errors.Add("You don't have that much money!");
                return View("OneAuction");
            }
            else {
                Bid newBid = new Bid {
                    Amount = (double)yourBid,
                    UserId = (int)loggedUserInt,
                    AuctionId = AuctionId
                };
                _context.Add(newBid);
                thisAuction.HighestBid = (double)yourBid;
                _context.SaveChanges();
                return RedirectToAction("AllAuctions");
            }
        }

        [HttpPost]
        [Route("delete_auction")]
        public IActionResult DeleteAuction(int AuctionId)
        {
            int? loggedUserInt = HttpContext.Session.GetInt32("UserId");
            if (loggedUserInt == null)  
            {
                return RedirectToAction("Register", "User");
            }
            Auction removeAuction = _context.auctions.SingleOrDefault(auction => auction.AuctionId == AuctionId);
            List<Bid> Bids = _context.bids.Where(bid => bid.AuctionId == AuctionId).ToList();
            foreach (var bid in Bids)
            {
                _context.Remove(bid);
            }
            _context.Remove(removeAuction);
            _context.SaveChanges();
            return RedirectToAction("AllAuctions");
        }
        [HttpGet]
        [Route("cashout")]
        public IActionResult CashOut()
        //my solution for expired auctions to be automated
        //create a route that handles the logic for determining the winner
        //when the winner is determined, pay the auction owner and take money from the dude
        //delete the auction from the database, and all history of the bids
        //probably not ideal but for this belt exam, it's insanely swag :)
        {
            List<Auction> AuctionsToCashOut = _context.auctions.Where(auction => auction.EndDate < DateTime.Now).Include(auction => auction.User).Include(auction => auction.Offers).ThenInclude(bidders => bidders.User).ToList();
            foreach (var auctions in AuctionsToCashOut)
            {
                System.Console.WriteLine(auctions.AuctionId);
                Bid maxBid = new Bid
                {
                    Amount = 0,
                };

                foreach (var bid in auctions.Offers)
                {
                    if (bid.Amount > maxBid.Amount)
                    {
                        //get the max bid from this auction
                    maxBid = bid;
                    }
                }
                //get the auction creator user
                User getPaidUser = _context.users.SingleOrDefault(user => user.UserId == auctions.UserId);
                //get the max bidder user
                User payingUser = _context.users.SingleOrDefault(user => user.UserId == maxBid.UserId);
                //update the amounts
                getPaidUser.Wallet += maxBid.Amount;
                payingUser.Wallet -= maxBid.Amount;
                //save
  
            }
            //then delete the auction so we never do this again..
            foreach (var auction in AuctionsToCashOut)
            {
                foreach (var bid in auction.Offers)
                {
                    _context.Remove(bid);
                }
                _context.Remove(auction);
            }
            _context.SaveChanges();
            return RedirectToAction("AllAuctions");


        }
    }
}