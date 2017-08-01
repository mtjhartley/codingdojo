using System;

namespace wizard_ninja_samurai
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Human human1 = new Human("Alex", 6, 5, 7, 225);
            Human human2 = new Human("Aaron", 10, 1, 8, 200);

            human1.attack(human2);
            System.Console.WriteLine(human1.health);
            System.Console.WriteLine(human2.health);

            Wizard dumble = new Wizard("Dumbledore");
            human1.attack(dumble);
            System.Console.WriteLine(dumble.health);
            dumble.Heal();
            dumble.Fireball(human1);
            System.Console.WriteLine(human1.health);
            Ninja naruto = new Ninja("Naruto");
            naruto.Steal(dumble);
            
            Samurai ryu = new Samurai("Ryu");
            Samurai ken = new Samurai("Ken");
            Human deadguy = new Human("deaddie", 10, 3, 4, 49);
            ken.DeathBlow(deadguy);
            
            Samurai.how_many();

        }
    }
}