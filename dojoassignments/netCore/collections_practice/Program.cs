using System;
using System.Collections.Generic;

namespace collections_practice
{
    class Program
    {
        static void Main(string[] args)
        {
            //3 basic arrays
            int[] numberArray = {0,1,2,3,4,5,6,7,8,9};
            Console.WriteLine(numberArray);

            string[] namesArray = new string[4];
            namesArray[0] = "Tim";
            namesArray[1] = "Martin";
            namesArray[2] = "Nikki";
            namesArray[3] = "Sara";
            Console.WriteLine(namesArray);

            bool[] booleanArray;
            booleanArray = new bool[] {true, false, true, false, true, false, true, false, true, false};
            Console.WriteLine(booleanArray);

            foreach (bool boolean in booleanArray)
            {
                Console.WriteLine("I am this boolean: {0}", boolean);
            }

            //Multiplication Table
            // With the values 1-10, use code to generate a multiplication table
            int range = 10;
            int[,] multiplicationTable = new int[range,range];
            for (int x = 0; x < range; x++)
            {
                for (int y = 0; y < range; y++)
                {
                    int output = (x+1)*(y+1);
                    Console.WriteLine(output);
                    multiplicationTable[x,y] = output;
                }
            }
            int rowLength = multiplicationTable.GetLength(0);
            int colLength = multiplicationTable.GetLength(1);


            for (int x = 0; x < rowLength; x++)
            {
                for (int y = 0; y < colLength; y++)
                {
                    Console.Write(string.Format("{0}  ", multiplicationTable[x,y])); //change to write
                }
                Console.Write(Environment.NewLine + Environment.NewLine); //change to write
            }
            Console.ReadLine();

            //List of Flavors
            List<string> flavors = new List<string>();
            flavors.Add("Vanilla");
            flavors.Add("Chocolate");
            flavors.Add("Strawberry");
            flavors.Add("Mocha");
            flavors.Add("Banana");
            //output the length
            Console.WriteLine(flavors.Count);
            //output the 3rd element in the array and remove it
            Console.WriteLine(flavors[2]);
            flavors.RemoveAt(2);
            //output the new length, should be 1 less
            Console.WriteLine(flavors.Count);
            
            //Create a User Info Dictionary
            Dictionary<string, string> users = new Dictionary<string, string>();
            //create a new dictionary, with string keys and string values
            // foreach (string name in namesArray)
            // {
            //     users.Add(name, "Wooo");
            // }
            // foreach (KeyValuePair<string, string> pair in users)
            // {
            //     Console.WriteLine("Key = {0}, Value = {1}", pair.Key, pair.Value);
            // }

            Random rand = new Random();
            foreach (string name in namesArray)
            {
                users[name] = flavors[rand.Next(flavors.Count)];
            }
            foreach (KeyValuePair<string, string> pair in users)
            {
                Console.WriteLine("Key = {0}, Value = {1}", pair.Key, pair.Value);
            }



            






        
        }
    }
}
