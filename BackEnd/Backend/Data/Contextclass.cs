using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Data
{
    public class Contextclass
         :DbContext
{
    public Contextclass(DbContextOptions<Contextclass> options)
        : base(options)
    { }

    public DbSet<User> Users { get; set;}
    public DbSet<RegisterUser> RUser { get; set; }
    }
}
