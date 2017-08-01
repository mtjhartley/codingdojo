using System;
namespace wizard_ninja_samurai{
    public class Wizard : Human
    {
    
        public Wizard(string nameString): base(nameString)
        {
            health = 50;
            intelligence = 25;
        }
        public void Heal()
        {
            health += intelligence * 10;
            System.Console.WriteLine("My current life is now: " + health);
        }
        public void Fireball(object target)
        {
            Human enemy = target as Human;
            if (enemy != null)
            {
                Random rand = new Random();
                enemy.health -= rand.Next(20,51);
                System.Console.WriteLine("Shooting a fireball!");

            }
        }


    }
        

}
