using Entities;
using Microsoft.EntityFrameworkCore;
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
    }
    public class GenericService<T> : IGenericService<T> where T : class
    {
        private IGenericService<T> _service;

        public GenericService(IGenericService<T> service)
        {
            this._service = service;
        }

        public async Task Add(T item)
        {
            await this._service.Add(item);
            return;
        }

        public async Task<List<T>> GetAll()
        {
            return await this._service.GetAll();

        }

        public async Task<T?> GetById(object id)
        {
            return await this._service.GetById(id);

        }

        public async Task<bool> Remove(object id)
        {
            return await this._service.Remove(id);
        }

        public async Task Update(T item)
        {
            await this._service.Update(item);
            return;
        }
    }
}
