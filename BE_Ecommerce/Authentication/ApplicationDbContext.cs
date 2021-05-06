using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE_Ecommerce.Models;

namespace BE_Ecommerce.Authentication
{
    public class ApplicationDbContext:IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
        {
        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
        public DbSet<BE_Ecommerce.Models.Author> Author { get; set; }
        public DbSet<BE_Ecommerce.Models.Category> Category { get; set; }
        public DbSet<BE_Ecommerce.Models.Provider> Provider { get; set; }
        public DbSet<BE_Ecommerce.Models.Publisher> Publisher { get; set; }
        public DbSet<BE_Ecommerce.Models.Book> Book { get; set; }
        public DbSet<BE_Ecommerce.Models.Comment> Comment { get; set; }
    }
}
