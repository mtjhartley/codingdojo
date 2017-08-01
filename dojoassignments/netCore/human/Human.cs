namespace human {

    public class Human
    {
        public string name;
        public int strength;
        public int intelligence;
        public int dexterity;
        public int health;

        public Human(string nameString)
        {
            name = nameString;
            strength = 3;
            intelligence = 3;
            dexterity = 3;
            health = 100;
        }
        public Human(string nameString, int strengthInt, int intelligenceInt, int dexterityInt, int healthInt)
        {
            name = nameString;
            strength = strengthInt;
            intelligence = intelligenceInt;
            dexterity = dexterityInt;
            health = healthInt;
        }
        public void Attack(object target)
        {
            Human enemy = target as Human;
            System.Console.WriteLine("Attacking this human: " + enemy.name);
            enemy.health -= strength * 5;
        }
    }


    

}