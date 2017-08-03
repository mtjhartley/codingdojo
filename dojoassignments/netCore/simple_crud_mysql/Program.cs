using System;
using System.Collections.Generic;
using DbConnection;

namespace simple_crud_mysql
{
    class Program
    {
        public class dbMethods
        {
            public static object readAll()
            {
                Object mydata = DbConnector.Query("SELECT * FROM USERS");
                return mydata;
            }

            public static void createUser(string firstName, string lastName, int number)
            {
                string queryString = $"INSERT INTO USERS (FirstName, LastName, FavoriteNumber) VALUES ('{firstName}', '{lastName}', {number})";
                DbConnector.Execute(queryString);
            }

            public static void updateUser(int ID, string firstName, string lastName, int number)
            {
                string queryString = $"UPDATE USERS SET FirstName = '{firstName}', LastName = '{lastName}', FavoriteNumber = {number} WHERE id={ID}";
                DbConnector.Execute(queryString);
            }
            public static void deleteUser(int ID)
            {
                string queryString = $"DELETE FROM USERS WHERE id={ID}";
                DbConnector.Execute(queryString);
            }


        }
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            
            // Object mydata = DbConnector.Query("SELECT * FROM USERS");
            // System.Console.WriteLine(mydata);   
            object allUsers = dbMethods.readAll();
            System.Console.WriteLine(allUsers);

            dbMethods.createUser("David", "Tze", 69);

            object newAllUsers = dbMethods.readAll();
            System.Console.WriteLine(newAllUsers);

            dbMethods.updateUser(1, "Alex", "Wallin", 32);

            object usersAfterUpdate = dbMethods.readAll();
            System.Console.WriteLine(usersAfterUpdate);

            dbMethods.deleteUser(1);
            object usersAfterDelete = dbMethods.readAll();
            System.Console.WriteLine(usersAfterDelete);




              

        }
    }
}
