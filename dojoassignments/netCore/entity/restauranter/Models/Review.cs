using System;
using System.ComponentModel.DataAnnotations;

namespace restauranter.Models
{
    public class Review : BaseEntity
    {
        public int ReviewId {get;set;}
        public string ReviewerName {get; set;}
        public string RestaurantName {get;set;}
        public string Content {get;set;}
        public int Stars {get;set;}
        public DateTime Visit {get;set;}
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt {get;set;}

    }
}