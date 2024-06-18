using Entities;
using Microsoft.EntityFrameworkCore;
using ShopNexus.Entities.DTO.Filter;
using System;

namespace DAL
{
    public interface IGenericService<T> where T : class
    {
        Task Add(T item);
        Task Update(T item);
        Task<List<T>> GetAll();
        Task<T?> GetById(object id);
        Task<bool> Remove(object id);
        Task<List<T>> GetFiltered(IGenericFilter<T> filter);
    }
    public class GenericService<T> : IGenericService<T> where T : class
    {
        private IGenericRepository<T> _repository;

        public GenericService(IGenericService<T> service)
        {
            this._repository = service;
        }

        public async Task Add(T item)
        {
            await this._repository.Add(item);
            return;
        }

        public async Task<List<T>> GetAll()
        {
            return await this._repository.GetAll();

        }

        public async Task<T?> GetById(object id)
        {
            return await this._repository.GetById(id);

        }

        public async Task<bool> Remove(object id)
        {
            return await this._repository.Remove(id);
        }

        public async Task Update(T item)
        {
            await this._repository.Update(item);
            return;
        }

        public async Task<List<T>> GetFiltered(IGenericFilter<T> filter)
        {
            return await this._repository.GetFiltered(filter);
        }

    }
}
