using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopNexus.Entities.DTO
{
    public class CategoryDTO
    {
        public string Name { get; set; }
        public string ImageURL { get; set; }
        public int? ParentCategoryId { get; set; }
    }
}
