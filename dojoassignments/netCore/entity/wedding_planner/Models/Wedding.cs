using System;
using System.Collections.Generic;

namespace wedding_planner.Models
{
    public class Wedding: BaseEntity
    {
        public int WeddingId {get;set;}
        public string SpouseOne {get;set;}
        public string SpouseTwo {get;set;}
        public string Address {get;set;}
        public DateTime Date {get;set;}
        public int UserId {get;set;}
        public User User {get;set;}
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt {get;set;}

        public List<Invitation> Attendees {get;set;}
        public Wedding()
        {
            Attendees = new List<Invitation>();
        }
    }
}