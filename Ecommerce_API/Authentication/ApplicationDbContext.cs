﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ecommerce_API.Models;

namespace Ecommerce_API.Authentication
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
        public DbSet<Ecommerce_API.Models.Author> Author { get; set; }
        public DbSet<Ecommerce_API.Models.Category> Category { get; set; }
        public DbSet<Ecommerce_API.Models.Provider> Provider { get; set; }
        public DbSet<Ecommerce_API.Models.Publisher> Publisher { get; set; }
        public DbSet<Ecommerce_API.Models.Book> Book { get; set; }
        public DbSet<Ecommerce_API.Models.Comment> Comment { get; set; }
    }
}
