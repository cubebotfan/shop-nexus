using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopNexus.Entities.DTO.Filter
{
    public interface IGenericFilter<T>
    {
        public IEnumerable<T> Filter(IEnumerable<T> items);
    }
    /* There is no generic implementation for this object */
}
