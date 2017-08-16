using System;
using System.Collections.Generic;

namespace auctions.Models
{
    public class Auction: BaseEntity
    {
        public int AuctionId {get;set;}
        public string ProductName{get;set;}
        public string Description {get;set;}
        public double StartingBid {get;set;}
        public double HighestBid {get;set;}
        public DateTime EndDate {get;set;}
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt {get;set;}
        public int UserId {get;set;}
        public User User {get;set;}

        public List<Bid> Offers {get;set;}
        public Auction()
        {
            Offers = new List<Bid>();
        }
    }
}