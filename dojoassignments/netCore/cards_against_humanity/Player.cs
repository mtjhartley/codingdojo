using System;
using System.Collections.Generic;

namespace cards_against_humanity{
    public class Player
    {
        public List<Card> hand = new List<Card>();
        public string name;
        public int score = 0;

        public Player(string nameString){
            name = nameString;
        }
        public Card drawCard(Deck deck)
        {
            Card drawnCard = deck.dealCard(); 
            hand.Add(drawnCard);
            return drawnCard;
        }
        public Card playCard(int idx)
        {
            if (idx <= hand.Count - 1)
            {
                Card discardedCard = hand[idx];
                hand.RemoveAt(idx);
                return discardedCard;
            }
            else {
                return null;
            }
        }
        public void resetHand()
        {
            hand = new List<Card>();
        }

        public void getCards()
        {
            string handString = "\nThese are the cards you currently hold!\n";
            for (int i = 0; i < hand.Count; i++)
            {
                string oneCard = "Card " + (i + 1) + " : " + hand[i].text + "\n";
                handString += oneCard;

            }
            System.Console.WriteLine(handString);
        }
        
        public Card playRandomCard() //used for our computers to pick a random answer
        {
            Random rand = new Random();
            int randIdx = rand.Next(0, hand.Count);
            Card discardedCard = hand[randIdx];
            hand.RemoveAt(randIdx);
            return discardedCard;
        }

    }
}