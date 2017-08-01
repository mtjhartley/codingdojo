using System;
using System.Linq;
using System.Collections.Generic;

namespace deck_of_cards
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Deck deck1 = new Deck();
            System.Console.WriteLine(deck1.cards);
            Card dealt1card = deck1.dealCard();
            System.Console.WriteLine(dealt1card);
            deck1.resetDeck();
            deck1.shuffleDeck();

            System.Console.WriteLine(deck1.cards);

            Player mike = new Player("Mike");
            mike.drawCard(deck1);
            System.Console.WriteLine(mike.hand);
            mike.drawCard(deck1);

            Card discardedCard = mike.discardCardAtIndex(1);
            System.Console.WriteLine(discardedCard);
        }
    }
}
