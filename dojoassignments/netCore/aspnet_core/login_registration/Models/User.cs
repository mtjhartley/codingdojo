using System;
using System.ComponentModel.DataAnnotations;

namespace login_registration.Models
{
    public class User : BaseEntity
    {
        [Required(ErrorMessage = "First Name is required")]
        [MinLength(2, ErrorMessage = "First name must be at least 2 characters long")]
        [RegularExpression(@"^[a-zA-Z''-'\s]{2,45}$", ErrorMessage = "Numbers are not allowed")]
        public string FirstName { get; set;}

        [Required(ErrorMessage = "Last Name is required")]
        [MinLength(2, ErrorMessage = "Last name must be at least 2 characters long")]
        [RegularExpression(@"^[a-zA-Z''-'\s]{2,45}$", ErrorMessage = "Numbers are not allowed")]
        public string LastName { get; set;}

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Email format is invalid")]
        public string Email {get; set;}

        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string Password { get; set;}
    }
}