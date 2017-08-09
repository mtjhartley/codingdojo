using System;
using System.ComponentModel.DataAnnotations;

namespace lost_in_the_woods.Models
{
    public class Trail : BaseEntity
    {
        public long id { get; set; }

        
        [Required(ErrorMessage = "You must input a trail name!")]
        public string Name { get; set; }

        [Required(ErrorMessage = "You must input a trail description!")]
        [MinLength(10, ErrorMessage = "Description must be at least 10 characters long")]
        public string Description { get; set; }

        [Required(ErrorMessage = "You must input a trail length")]
        public double Length { get; set; }

        [Required(ErrorMessage = "You must input an elevation change")]
        public double Elevation { get; set; }

        [Required(ErrorMessage = "You must input an Longitude")]
        public double Longitude { get; set; }

        [Required(ErrorMessage = "You must input an Latitude")]
        public double Latitude { get; set; }
        
    }
}