using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopNexus.Entities.DTO.Filter
{
    /* Returns a list all subcategories of a category in the list provided */
    /* Grandchildren categories will not be returned if their parent is missing from the list */
    public class SubCategoryFilter : IGenericFilter<Category>
    {
        /* If true, returns the parent category */
        private bool _includeSelf = true;
        private int _categoryId;

        public SubCategoryFilter(int categoryId) {
            this._categoryId = categoryId;
        }

        public SubCategoryFilter IncludeSelf()
        {
            this._includeSelf = true;
            return this;
        }

        public SubCategoryFilter ExcludeSelf()
        {
            this._includeSelf = false;
            return this;
        }

        public IEnumerable<Category> Filter(IEnumerable<Category> items)
        {
            List<Category> categories = new List<Category>();
            if (this._includeSelf)
            {
                Category? category = items.Where(c => c.CategoryId == this._categoryId).FirstOrDefault();
                if (category!=null)
                {
                    categories.Add(category);
                }
            }
            
            return categories.Concat(getSubCategories(items, this._categoryId));
        }

        private IEnumerable<Category> getSubCategories(IEnumerable<Category> items, int categoryId)
        {
            List<Category> categories = new List<Category>();
            foreach (var item in items)
            {
                if (item.CategoryId == categoryId)
                {
                    categories.Add(item);
                    categories.Concat(getSubCategories(items, item.CategoryId)); /* Recursion Jumpscare */
                    /* This code probably sucks. Reimplement in a better way if you can */
                }
            }
            return categories;
        }
    }
}
