using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopNexus.Entities.DTO.Filter
{
    public class ProductFilter : IGenericFilter<Product>
    {
        private bool _filterCategories = false;
        private int[] _categoryIds;
        public ProductFilter() { }

        public ProductFilter setFilteredCategories(int[] categoryIds)
        {
            this._filterCategories = true;
            this._categoryIds = categoryIds;
            return this;
        }

        public ProductFilter setFilteredCategories(List<Category> categories)
        {
            return this.setFilteredCategories(
                categories.ConvertAll(new Converter<Category, int>(category => { return category.CategoryId; })).ToArray()
            );
        }

        public IEnumerable<Product> Filter(IEnumerable<Product> items)
        {
            IEnumerable<Product> products = new List<Product>(items);
            if (this._filterCategories)
            {
                products = products.Where(product => { return this._categoryIds.Any(categoryId => product.CategoryId == categoryId); });
            }
            return products;
        }
    }
}
