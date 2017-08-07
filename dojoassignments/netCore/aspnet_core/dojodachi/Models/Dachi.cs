namespace dojodachi
{
    public class Dachi 
    {
        public int fullness { get; set;}
        public int happiness {get; set;}
        public int meals {get; set;}
        public int energy {get; set;}
        public int turnCount {get; set;}

        public Dachi()
        {
            fullness = 20;
            happiness = 20;
            meals = 3;
            energy = 50;
            turnCount = 1;
        }
    }
}