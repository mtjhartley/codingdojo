using Microsoft.EntityFrameworkCore;

namespace wedding_planner.Models
{
    public class WeddingContext: DbContext
    {
        public WeddingContext(DbContextOptions<WeddingContext> options) : base(options) { }

        public DbSet<User> Users {get;set;}
        public DbSet<Wedding> Weddings {get;set;}
        public DbSet<Invitation> Invitations {get;set;}
    }
}