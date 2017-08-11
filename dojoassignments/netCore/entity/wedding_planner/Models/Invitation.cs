using System;
using System.Collections.Generic;

namespace wedding_planner.Models
{
    public class Invitation: BaseEntity
    {
        public int InvitationId {get;set;}
        public int UserId {get;set;}
        public User User {get;set;}
        public int WeddingId {get;set;}
        public Wedding Wedding {get;set;}
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt {get;set;}

    }
}