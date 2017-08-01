using System;
namespace wizard_ninja_samurai{

    public class Samurai : Human
    {
        public static int count = 0;

        public Samurai(string nameString): base(nameString)
        {
            count++;
            health = 200;
        }
        public void DeathBlow(object target)
        {
            Human enemy = target as Human;
            if (enemy != null)
            {
                if (enemy.health < 50)
                {
                    System.Console.WriteLine("Dealing the killing blow!!");
                    enemy.health = 0;
                }
            }
        }
        public void Meditate(object target)
        {
            health = 200;
        }
        public static void how_many() {
            System.Console.WriteLine("there are {0} samurai.", count);
        }
    }
}