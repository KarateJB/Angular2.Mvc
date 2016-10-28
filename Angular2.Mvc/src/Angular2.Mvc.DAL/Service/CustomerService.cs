using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Angular2.Mvc.DAL.Models.DAO;

namespace Angular2.Mvc.DAL.Service
{
    public class CustomerService:IDisposable
    {
        private NgDbContext _dbContext = null;

        public CustomerService(NgDbContext dbContext)
        {
            if (dbContext != null)
            {
                this._dbContext = dbContext;
            }
        }

        public IEnumerable<Customer> GetAll()
        {
            //var dbContext = new DefaultDbContext();
            return this._dbContext.Customers;
        }
        public IEnumerable<Customer> Get(Expression<Func<Customer, bool>> filter)
        {
            //var dbContext = new DefaultDbContext();
            return this._dbContext.Customers.Where(filter);
        }

        public void Add(Customer entity)
        {
            //var dbContext = new DefaultDbContext();
            this._dbContext.Customers.Add(entity);
            this._dbContext.SaveChanges();
        }

        public void Update(Customer entity)
        {
            //var dbContext = new DefaultDbContext();
            this._dbContext.SaveChanges();
        }

        public void Remove(Customer entity)
        {
            //var dbContext = new DefaultDbContext();
            this._dbContext.Customers.Remove(entity);
            this._dbContext.SaveChanges();
        }

        public void Dispose()
        {
        }
    }
}
