namespace wizard_ninja_samurai{

    public class Human
    {
        public string name;

        //get;set; format creates accessor methods for the specified fields
        public int health { get; set;}
        public int strength { get; set;}
        public int intelligence { get; set;}
        public int dexterity { get; set;}

        public Human(string nameString)
        {
            name = nameString;
            strength = 3;
            intelligence = 3;
            dexterity = 3;
            health = 100;
        }
        public Human(string nameString, int str, int intl, int dex, int hp)
        {
            name = nameString;
            strength = str;
            intelligence = intl;
            dexterity = dex;
            health = hp;
        }
        public void attack(object target)
        {
            Human enemy = target as Human;
            if (enemy == null)
            {
                System.Console.WriteLine("Failed attack!");
            }
            else 
            {
            System.Console.WriteLine("Attacking this Person: " + enemy.name);
            enemy.health -= strength * 5;
            }

        }

    }




}