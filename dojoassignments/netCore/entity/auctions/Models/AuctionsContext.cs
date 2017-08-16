using Microsoft.EntityFrameworkCore;

namespace auctions.Models
{
    public class AuctionContext: DbContext
    {
        public AuctionContext(DbContextOptions<AuctionContext> options) : base(options) { }

        public DbSet<User> users {get;set;}
        public DbSet<Auction> auctions {get;set;}
        public DbSet<Bid> bids {get;set;}
    }
}