using Microsoft.EntityFrameworkCore;
using ShopNexus.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Context
{
    public interface IContext
    {
        public DbSet<Category> Categories { get; }
        public DbSet<Product> Products { get; }

        public Task<int> SaveChangesAsync();
    }
    public class ShopNexusContext : DbContext, IContext
    {
        public ShopNexusContext() : base()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.;Database=ShopNexusDB;Trusted_Connection=True;TrustServerCertificate=True;");
        }
        public async Task<int> SaveChangesAsync()
        {
            return await base.SaveChangesAsync();
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

    }
}
