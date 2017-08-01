using System;
namespace wizard_ninja_samurai{
    public class Ninja : Human
    {
        public Ninja(string nameString): base(nameString)
        {
            dexterity = 175;
        }
        public void Steal(object target)
        {
            Human enemy = target as Human;
            if (enemy != null)
            {
               attack(enemy);
               health += 10; 
            }
        }
        public void GetAway()
        {
            health -= 15;
        }
    }
}
