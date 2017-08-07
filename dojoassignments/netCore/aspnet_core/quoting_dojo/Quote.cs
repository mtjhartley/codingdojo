using System;
using System.ComponentModel.DataAnnotations;

namespace quoting_dojo.Models
{
    public class Quote
    {
        public int QuoteId {get; set;}

        public string QuoteAuthor {get; set;}

        public string QuoteText {get; set;}

        public DateTime CreatedAt {get; set;}

        public DateTime UpdatedAt {get; set;}
    }
}