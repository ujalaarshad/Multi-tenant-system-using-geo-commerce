using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly Contextclass _context;
        public ValuesController(Contextclass context
            )
        {
            _context =context;
        }
        // GET api/values
        [HttpGet]
        public ActionResult<User> GetAll()
        {
            return Ok(new { UserStatus = "GetAll",allusers=_context.RUser });
        }
        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] RegisterUser User)
        {
            if(!ModelState.IsValid)
            {
                return Ok(new { UserStatus = "CreatedFailure" });
            }
            //RegisterUser User = new RegisterUser();
            //User.FirstName = FirstName;
            //User.LastName = LastName;
            //User.StoreName = StoreName;
            //User.EmailAddress = EmailAddress;
            //User.Password = Password;
            //User.CPassword = CPassword;
            _context.RUser.Add(User);
            await _context.SaveChangesAsync();
            return Ok(new { UserStatus = "Done", User });
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
