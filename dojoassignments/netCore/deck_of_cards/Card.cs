namespace deck_of_cards{
    public class Card
    {
        public string stringVal;
        public string suit;
        public int val;

        public Card(string valName, string suitName, int cardVal)
        {
            stringVal = valName;
            suit = suitName;
            val = cardVal;
        }
    }
}