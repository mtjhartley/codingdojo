using System;
using System.Collections.Generic;

namespace cards_against_humanity{
    public class Deck
    {
        public List<Card> cards = new List<Card>();
        public string[] questions = {"Facebook has acquired ____ for $10 million dollars",
            "The theme for the belt exam was ____",
            "My favorite cat name is ____",
            "I wrote a Regex expression that matches ___",
            "New feature in ES2017",
            "My Console.WriteLine statement returned ___",
            "If (err) {console.log(___) }",
            "Git commit -m ___",
            "The broken bathroom facuet in the 3rd floor men's bathroom was caused by ___",
            "I Googled it and got ____",
            "According to Stack Overflow, my problem is ___?",
            "Danger! ____ ahead!",
            "My favorite part about Coding Dojo is ____!",
            "My least favorite part about Coding Dojo is ____!",
            "The new hottest front end framework is ____.",
            "____ - Michael Scott, 2017",
            "Why did you name your program ____?",
            "I wrote some code to process ____ quickly",
            "Donovan said it's okay to take ____ at 5 in the morning",
            "Last Minute Announcement: Please don't ____",
            "Donovan should rename his ping pong paddle to ____",
            "I just found a great API for ____",
            "Finding ____ in the refridgerator.",
            "This weeks topic for algorithms is ____.",
            "The bug in our program was caused by ____",
            "They just created an emoji version of ____",
            "In Coding Dojo: The Movie, George Clooney will be starring as ____",

        };
        public string[] jokes = {"A linked list",
            "A Node",
            "The leaky ceiling",
            "Morning algorithms",
            "Jack's bell",
            "Jack's pointing stick",
            "Free food from the open house",
            "Git Merge Conflicts",
            "15k for a coding bootcamp and the internet doesn't work",
            "Hacking javascript in the console to get rid of the timer in the belt exam.",
            "9.4 on the belt exam.",
            "Stack Overflow",
            "You know nothing Jon Snow!",
            "Torrenting movies on Dojo WIFI",
            "Ray's enthusiasm",
            "Michael Arbogasts' Hmmmmm (Walks Away)",
            "Michael Arbogasts' New Cyborg Eyes",
            "Running out of poptarts",
            "MySQL Workbench",
            "Instructor showing up at 9:03 and Brad reminding them that algorithms start at 9",
            "Alexa",
            "Bears",
            "Editing Wikipedia to win an argument",
            "Frantically clicking pictures of cats on the internet",
            "Getting unfriended by your mom on Facebook",
            "Hello Kitty",
            "Nicholas Cage's storied career",
            "Brad",
            "Cool? Cool!",
            "Python Olympics",
            "Beer",
            "Chuck Norris",
        };
        //Cool use of method override for the constructor!
        public Deck()
        {
            //add all of the answers to the deck
            for (int i = 0; i < jokes.Length; i++)
            {
                Card newCard = new Card(jokes[i]);
                // System.Console.WriteLine("*******");
                // System.Console.WriteLine(newCard.text);
                // System.Console.WriteLine("*******");
                cards.Add(newCard);
            }
        }
        public Deck(bool question)
        {   
            if (question)
            {
                for (int i = 0; i < questions.Length; i++)
                {
                    Card newCard = new Card(questions[i]);
                    // System.Console.WriteLine("*******");
                    // System.Console.WriteLine(newCard.text);
                    // System.Console.WriteLine("*******");
                    cards.Add(newCard);
                }
            }
        }
        public Card dealCard()
        {
            Card dealtCard = cards[0];
            cards.RemoveAt(0);
            return dealtCard;
        }
        public void resetDeck()
        {
            for (var i = 0; i < jokes.Length; i++)
            {
                Card newCard = new Card(jokes[i]);
                // System.Console.WriteLine("*******");
                // System.Console.WriteLine(newCard.text);
                // System.Console.WriteLine("*******");
            }

        }
        public void shuffleDeck()
        {
            Random rand = new Random();
            for (int i = 0; i < cards.Count; i++)
            {
                Card temp = cards[i];
                int randomIndex = rand.Next(0, cards.Count);
                cards[i] = cards[randomIndex];
                cards[randomIndex] = temp;
            }
            // System.Console.WriteLine("Shuffled the cards!");
        }
    }

}