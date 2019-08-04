using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    // GET: User
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        
        
            private readonly Contextclass _context;

            public UserController(Contextclass context)
            {
                _context = context;
            }

            // GET: api/Users
            [HttpGet]
            public async Task<ActionResult<IEnumerable<RegisterUser>>> GetRegisterUsers()
            {
                return await _context.RUser.ToListAsync();
            }

            // GET: api/Users/5
            [HttpGet("{id}")]
            public async Task<ActionResult<RegisterUser>> GetUser(int id)
            {
                var user = await _context.RUser.FindAsync(id);

                if (user == null)
                {
                    return NotFound();
                }

                return user;
            }

            // PUT: api/Users/5
            [HttpPut("{id}")]
            public async Task<IActionResult> PutUser(int id, RegisterUser user)
            {
                if (id != user.Id)
                {
                    return BadRequest();
                }

                _context.Entry(user).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserExists(id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }

                return NoContent();
            }

            // POST: api/Users
            [HttpPost]
            public async Task<ActionResult<User>> PostUser(RegisterUser user)
            {
                _context.RUser.Add(user);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetUser", new { id = user.Id }, user);
            }

            // DELETE: api/Users/5
            [HttpDelete("{id}")]
            public async Task<ActionResult<RegisterUser>> DeleteUser(int id)
            {
                var user = await _context.RUser.FindAsync(id);
                if (user == null)
                {
                    return NotFound();
                }

                _context.RUser.Remove(user);
                await _context.SaveChangesAsync();

                return user;
            }

            private bool UserExists(int id)
            {
                return _context.RUser.Any(e => e.Id == id);
            }
        }
    }
