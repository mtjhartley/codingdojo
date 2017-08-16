using System;
using System.Collections.Generic;

namespace auctions.Models
{
    public class User: BaseEntity
    {
        public int UserId {get;set;}
        public string UserName{get;set;}
        public string FirstName {get;set;}
        public string LastName {get;set;}
        public string Password {get;set;}
        public double Wallet {get;set;} 
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt {get;set;}

        public List<Bid> MyBids {get;set;}
        public User()
        {
            MyBids = new List<Bid>();
        }
    }
}