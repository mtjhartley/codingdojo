using Microsoft.EntityFrameworkCore;

namespace bank_accounts.Models
{
    public class BanksContext: DbContext
    {
        public BanksContext(DbContextOptions<BanksContext> options) : base(options) { }

        public DbSet<User> Users {get;set;}
        // public DbSet<Transaction> Transactions {get;set;}
    }
}