using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace login_registration.Controllers
{
    public class UserController: Controller
    {
        private readonly DbConnector _dbConnector;
        public UserController(DbConnector connect)
        {
            _dbConnector = connect;
        }

    }
}