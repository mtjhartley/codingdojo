using System;
namespace bank_accounts.Models
{
    public class Transaction : BaseEntity
    {
        public int TransactionId {get;set;}
        public double Amount {get;set;}
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt {get;set;}
        public int UserId {get;set;}
        public User User {get;set;}
    }
}