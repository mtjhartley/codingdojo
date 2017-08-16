using System.ComponentModel.DataAnnotations;
namespace auctions.Models
{
    public class RegisterViewModel : BaseEntity
    {
        [Required]
        [MinLength(4)]
        [MaxLength(19)]
        public string UserName {get;set;}
        
        [RegularExpression(@"[a-zA-Z]+$")]
        public string FirstName {get;set;}

        [Required]
        [RegularExpression(@"[a-zA-Z]+$")]
        public string LastName {get;set;}

        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string Password {get;set;}

        [Compare("Password", ErrorMessage = "Passwords do not match!")]
        public string PasswordConfirmation {get;set;}
    }
}