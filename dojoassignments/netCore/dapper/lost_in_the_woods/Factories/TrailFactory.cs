using System.Collections.Generic;
using System.Data;
using Microsoft.Extensions.Options;
using MySql.Data.MySqlClient;
using lost_in_the_woods;
using lost_in_the_woods.Models;
using Dapper;
using System.Linq;

namespace lost_in_the_woods.Factories
{
    public class TrailFactory
    {
        private readonly IOptions<MySqlOptions> MySqlConfig;
 
        public TrailFactory(IOptions<MySqlOptions> config)
        {
            MySqlConfig = config;
        }
        internal IDbConnection Connection {
            get {
                return new MySqlConnection(MySqlConfig.Value.ConnectionString);
            }
        }

        //Get All Trails
        public List<Trail> GetAllTrails(string sort = "id")
        {
            using(IDbConnection DbConnector = Connection)
            {
                using(IDbCommand command = DbConnector.CreateCommand())
                {
                    string query = $"SELECT * FROM trails ORDER BY {sort}";
                    System.Console.WriteLine(query);
                    DbConnector.Open();
                    return DbConnector.Query<Trail>(query).ToList();
                }
            }
        }

        //Add New Trail
        public void AddNewTrail(Trail trail)
        {
            using (IDbConnection DbConnector = Connection)
            {
                string query = "INSERT INTO trails (name, description, length, elevation, longitude, latitude) VALUES (@Name, @Description, @Length, @Elevation, @Longitude, @Latitude)";
                DbConnector.Open();
                DbConnector.Execute(query, trail);
            }
        }
        public List<Trail> ViewOneTrail(long id)
        {
            using(IDbConnection DbConnector = Connection)
            {
                using (IDbCommand command = DbConnector.CreateCommand())
                {
                    string query = $"SELECT * FROM trails WHERE id = {id}";
                    DbConnector.Open();
                    return DbConnector.Query<Trail>(query).ToList();
                }
            }
        }
    }
}