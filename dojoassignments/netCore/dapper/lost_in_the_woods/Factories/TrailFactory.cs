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
 
        public DbConnector(IOptions<MySqlOptions> config)
        {
            MySlConfig = config;
        }
        internal IDbConnection Connection {
            get {
                return new MySqlConnection(MySqlConfig.Value.ConnectionString);
            }
        }

        //Get All Trails
        public List<Trail> GetAllTrails()
        {
            using(IDbConnection DbConnector = Connection)
            {
                using(IDbCommand command = DbConnector.CreateCommand())
                {
                    string query = "SELECT * FROM trails";
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
                string query = $"INSERT INTO trails (name, description, length, elevation, longitude, latitude) VALUES (@Name, @Description, @Length, @Elevation, @Longitude, @Latitude)";
                DbConnector.Open();
                DbConnector.Execute(query);
            }
        }
    }
}