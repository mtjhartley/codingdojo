using System;
using System.Collections.Generic;

namespace boxing_unboxing
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            List<object> myBox = new List<object>();
            myBox.Add(7);
            myBox.Add(28);
            myBox.Add(-1);
            myBox.Add(true);
            myBox.Add("chair");

            foreach(object item in myBox)
            {
                Console.WriteLine("This box contains: " + item);
            }

            int sum = 0;
            foreach(object item in myBox)
            {
                if(item is int)
                {
                    sum += (int)item; //using explicit casting, not safe explicit casting, because integers are not nullable
                }

            }
            Console.WriteLine("The total sum is {0}", sum);




        }
    }
}
