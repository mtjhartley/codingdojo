using System;
using System.Collections.Generic;

namespace basic13
{
    class Program
    {

        public static void print1To255()
        {
            for (var i = 1; i <= 255; i++)
            {
                Console.WriteLine(i);
            }
        }
        public static void print1To255Odd()
        {
            for (var i = 1; i <= 255; i++)
            {
                if (i % 2 == 0) 
                {
                   Console.WriteLine(i); 
                }
            }
        }

        public static void printSumTo255()
        {
            int sum = 0;
            for (var i = 0; i <= 255; i++)
            {
                sum += i;
                Console.WriteLine("New Number: {0}, Sum: {1}", i, sum);
            }
        }

        public static void printArray(int[] arr)
        {
            for (int i = 0; i < arr.Length; i++)
            {
                Console.WriteLine(arr[i]);
            }
        }

        public static void findMax(int[] arr)
        {
            int max = arr[0];
            for (int i = 1; i < arr.Length; i++)
            {
                if (arr[i] > max)
                {
                    max = arr[i];
                }
            }
            Console.WriteLine(max);
        }

        public static void getAverage(int[] arr)
        {
            int total = 0;
            int count = arr.Length;
            for (int i = 0; i < arr.Length; i++)
            {
                total += arr[i];
            }
            Console.WriteLine(total/count);
        }

        public static void arrayOfOdds()
        {
            List<int> oddArray = new List<int>();
            for (int i = 1; i < 256; i++)
            {
                if (i % 2 == 1)
                {
                    oddArray.Add(i);
                }
            }
            Console.WriteLine(oddArray);

        }

        public static void greaterThanY(int[] arr, int y)
        {
            int greaterCount = 0;
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i] > y)
                {
                    greaterCount++;
                }
            }
            Console.WriteLine(greaterCount);
        }

        public static void squareArray(int[] arr)
        {
            for (var i = 0; i < arr.Length; i++)
            {
                arr[i] = arr[i]*arr[i];
                Console.WriteLine(arr[i]); //to see if it's getting squared
            }

        }
        public static void elimNegatives(int[] arr)
        {
            for (var i = 0; i < arr.Length; i++)
            {
                if (arr[i] < 0)
                {
                    arr[i] = 0;
                }
            }
        }

        public static void shiftArray(int[] arr)
        {
            for (var i = 0; i < arr.Length-1; i++)
            {
                arr[i] = arr[i+1];
            }
            arr[arr.Length-1] = 0;
        }

        public static void numberToString(int[] arr)
        {
            List<object> newList = new List<object>();
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i] < 0)
                {
                    newList.Add("Dojo");
                }
                else
                {
                    newList.Add(arr[i]);
                }
            }
            foreach (object item in newList)
            {
                Console.WriteLine(item);
            }
        }
        static void Main(string[] args)
        {
            //print1To255();
            //print1To255Odd();
            //printSumTo255();
            int[] myArray = {1,2,-3,4,7,6,5,4,5};
            int[] myArray2 = {1,2,3};
            // printArray(myArray);
            //findMax(myArray);
            //getAverage(myArray);
            // greaterThanY(myArray, 6);
            // squareArray(myArray);
            //elimNegatives(myArray);
            numberToString(myArray);




        }
    }
}
