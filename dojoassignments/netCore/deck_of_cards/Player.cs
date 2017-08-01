using System;
using System.Collections.Generic;

namespace deck_of_cards{
    public class Player
    {
        public List<Card> hand = new List<Card>();
        string name;

        public Player(string nameString){
            name = nameString;
        }
        public Card drawCard(Deck deck)
        {
            Card drawnCard = deck.dealCard(); 
            hand.Add(drawnCard);
            return drawnCard;
        }
        public Card discardCardAtIndex(int idx)
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
    }
}