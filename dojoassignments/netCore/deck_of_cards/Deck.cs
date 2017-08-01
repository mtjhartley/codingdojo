using System;
using System.Collections.Generic;

namespace deck_of_cards{
    public class Deck
    {
        public List<Card> cards = new List<Card>();
        public string[] suits = {"Clubs", "Spades", "Hearts", "Diamonds"};
        public string[] cardValues = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};

        public Deck()
        {
            for (int j = 0; j < suits.Length; j++)
            {
                for (int h = 0; h < cardValues.Length; h++)
                {
                    Card newCard = new Card(cardValues[h], suits[j], h+1);
                    System.Console.WriteLine("*******");
                    System.Console.WriteLine(newCard.stringVal);
                    System.Console.WriteLine(newCard.suit);
                    System.Console.WriteLine(newCard.val);
                    System.Console.WriteLine("*******");
                    cards.Add(newCard);
                }
            }
            System.Console.WriteLine(cards);
        }
        public Card dealCard()
        {
            Card dealtCard = cards[0];
            cards.RemoveAt(0);
            return dealtCard;
        }
        public void resetDeck()
        {
            cards = new List<Card>();
            for (int j = 0; j < suits.Length; j++)
            {
                for (int h = 0; h < cardValues.Length; h++)
                {
                    Card newCard = new Card(cardValues[h], suits[j], h+1);
                    System.Console.WriteLine("*******");
                    System.Console.WriteLine(newCard.stringVal);
                    System.Console.WriteLine(newCard.suit);
                    System.Console.WriteLine(newCard.val);
                    System.Console.WriteLine("*******");
                    cards.Add(newCard);
                }
            }
            System.Console.WriteLine("The new length of the cards after reset is " + cards.Count);

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
            System.Console.WriteLine("Shuffled the cards!");
        }
    }

}