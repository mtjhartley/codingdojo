using System;
using System.ComponentModel.DataAnnotations;
namespace auctions.Models
{
    public class AuctionViewModel : BaseEntity
    {
        [Required]
        [MinLength(4)]
        public string ProductName {get;set;}
        
        [Required]
        [MinLength(11)]
        public string Description {get;set;}

        [Required]
        public double StartingBid {get;set;}

        [Required]
        public DateTime EndDate {get;set;}

    }
}