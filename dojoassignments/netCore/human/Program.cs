using System;

namespace human
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Human bill = new Human("Bill");
            Human kratos = new Human("Kratos", 300, 300, 300, 1000);
            System.Console.WriteLine("Hello, my name is {0}!", bill.name);
            System.Console.WriteLine("I am going to attack {0}", kratos.name);

            bill.Attack(kratos);
            System.Console.WriteLine("{0} here. After being attacked, my health is at {1}", kratos.name, kratos.health);

            System.Console.WriteLine("Time for my counter attack. Prepare to die, {0}", bill.name);
            kratos.Attack(bill);
            System.Console.WriteLine("{0}: ...I am dead...my health points have reached: {1}", bill.name, bill.health);



        }
    }
}
