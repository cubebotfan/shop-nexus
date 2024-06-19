using Entities;
using Entities.Context;
using Microsoft.EntityFrameworkCore;
using ShopNexus.Entities.DTO.Filter;
using System;

namespace DAL
{
    public interface IGenericRepository<T> where T : class
    {
        Task Add(T item);
        Task Update(T item);
        Task<List<T>> GetAll();
        Task<T?> GetById(object id);
        Task<bool> Remove(object id);
        Task<List<T>> GetFiltered(IGenericFilter<T> filter);
    }
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly ShopNexusContext _context;
        private DbSet<T> _entity;

        public GenericRepository(ShopNexusContext context)
        {
            this._context = context;
            this._entity = context.Set<T>();

        }

        public async Task Add(T item)
        {
            await this._entity.AddAsync(item);
            this._context.SaveChanges();
            return;
        }

        public async Task<List<T>> GetAll()
        {
            return await this._entity.ToListAsync();
        }

        public async Task<T?> GetById(object id)
        {
            return await this._entity.FindAsync(id);
        }

        public async Task<bool> Remove(object id)
        {
            T? t = await this._entity.FindAsync(id);
            if (t != null)
            {
                this._entity.Remove(t);
                this._context.SaveChanges();
                return true;
            }
            return false;
        }

        public async Task Update(T item)
        {
            this._entity.Attach(item);
            this._context.Entry(item).State = EntityState.Modified;
            this._context.SaveChanges();
            return;
        }

        public async Task<List<T>> GetFiltered(IGenericFilter<T> filter)
        {
            return filter.Filter(this._entity.ToList<T>()).ToList();
        }
    }
}
