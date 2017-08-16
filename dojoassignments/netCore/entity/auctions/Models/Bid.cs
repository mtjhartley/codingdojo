using System;
using System.Collections.Generic;

namespace auctions.Models
{
    public class Bid: BaseEntity
    {
        public int BidId {get;set;}
        public double Amount {get;set;}
        public int UserId {get;set;}
        public User User {get;set;}
        public int AuctionId {get;set;}
        public Auction Auction {get;set;}
    }
}