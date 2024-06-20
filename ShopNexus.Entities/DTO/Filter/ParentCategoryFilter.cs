using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopNexus.Entities.DTO.Filter
{
    /* Returns a list all parent categoriess of the provided category id in the list provided */
    /* parents are returned in order from parents to greater-parents */
    public class ParentCategoryFilter : IGenericFilter<Category>
    {
        /* If true, returns the parent category */
        private bool _includeSelf = true;
        private int _categoryId;

        public ParentCategoryFilter(int categoryId) {
            this._categoryId = categoryId;
        }

        public ParentCategoryFilter IncludeSelf()
        {
            this._includeSelf = true;
            return this;
        }

        public ParentCategoryFilter ExcludeSelf()
        {
            this._includeSelf = false;
            return this;
        }

        public IEnumerable<Category> Filter(IEnumerable<Category> items)
        {
            List<Category> categories = new List<Category>();

            Category? category = items.Where(c => c.CategoryId == this._categoryId).FirstOrDefault();
            if (!this._includeSelf && category != null)
            {
                category = items.Where(item => { return item.CategoryId == category.ParentCategoryId; }).FirstOrDefault();
            }
            
            while (category != null)
            {
                categories.Add(category);
                category = items.Where(item => { return item.CategoryId == category.ParentCategoryId; }).FirstOrDefault();
            }

            return categories;
        }
    }
}
