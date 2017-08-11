using System.ComponentModel.DataAnnotations;
namespace wedding_planner.Models
{
    public class RegisterViewModel : BaseEntity
    {
        [Required]
        [MinLength(2)]
        [RegularExpression(@"[a-zA-Z]+$")]
        public string FirstName {get;set;}

        [Required]
        [MinLength(2)]
        [RegularExpression(@"[a-zA-Z]+$")]
        public string LastName {get;set;}

        [Required]
        [EmailAddress]
        public string Email {get;set;}

        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string Password {get;set;}

        [Compare("Password", ErrorMessage = "Passwords do not match!")]
        public string PasswordConfirmation {get;set;}
    }
}