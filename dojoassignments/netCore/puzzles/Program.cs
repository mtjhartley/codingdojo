using System;
using System.Linq;

namespace puzzles
{
    class Program
    {
        public static void randomArray()
        {
            Random rand = new Random();
            int[] randArr = new int[10];

            for (var i = 0; i < randArr.Length; i++)
            {
                randArr[i] = rand.Next(5,26);
            }
            Console.WriteLine("this is the max: " + randArr.Max());
            Console.WriteLine("this is the min: " + randArr.Min());
            int sum = 0;
            for (var i = 0; i < randArr.Length; i++)
            {
                sum += randArr[i];
            }
            Console.WriteLine("this is the sum of the array: " + sum);

        }

        public static void coinFlip()
        {
            Console.WriteLine("Tossing a coin!");
            Random rand = new Random();
            int flip = rand.Next(0,1);
            string result;
            if (flip == 0)
            {
                result = "Heads!";
            }
            else if (flip == 0)
            {
                result = "Tails!";
            }
            else
            {
                result = "This flip can't be right!";
            }
            Console.WriteLine(result);
        }

        public static double tossMultipleCoins(int num)
        {
            int heads = 0;
            Random rand = new Random();
            
            for (int i = 0; i < num; i++)
            {
                if (rand.Next(0,2) == 0)
                {
                    heads++;
                }
            }
            double ratio = (double)heads/(double)num;
            return ratio;

        }
        public static void shuffleArray(string[] arr)
        {
            Random rand = new Random();
            for (int i = 0; i < arr.Length; i++)
            {
                string temp = arr[i];
                int randomIndex = rand.Next(0, arr.Length);
                arr[i] = arr[randomIndex];
                arr[randomIndex] = temp;
            }
            System.Console.WriteLine(arr);
        }

        public static void namesLongerThan5(string[] arr)
        {
            int countNames = 0;
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i].Length > 5)
                {
                    countNames++;
                }

            }
            int count = 0;
            string[] namesArr = new string[countNames];
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i].Length > 5)
                {
                    System.Console.WriteLine(arr[i]);
                    namesArr[count] = arr[i];
                    count++;
                }
            }
            System.Console.WriteLine(namesArr);

            
        }


        static void Main(string[] args)
        {
            //randomArray();
            //coinFlip();
            //tossMultipleCoins(10);
            string[] names = {"Todd", "Tiffany", "Charlie", "Geneva", "Sydney"};
            shuffleArray(names);
            namesLongerThan5(names);

        }
    }
}
