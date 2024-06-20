using AutoMapper;
using BLL;
using Microsoft.AspNetCore.Mvc;
using ShopNexus.Entities;
using ShopNexus.Entities.DTO;
using ShopNexus.Entities.DTO.Filter;

/* Template Controller that came with the project. Delete this later once we have an actual controller */

namespace ShopNexus.Server.Controllers
{
    [ApiController]
    [Route("api/")]
    public class CategoryController : ControllerBase
    {
        private readonly IGenericService<Category> _categoryService;
        private readonly IMapper _mapper;


        public CategoryController(IGenericService<Category> categoryService, IMapper mapper)
        {
            this._categoryService = categoryService;
            this._mapper = mapper;
        }

        [HttpGet("categories")]
        public async Task<IActionResult> GetAllCategories()
        {
            List<Category> categories = await this._categoryService.GetAll();
            /* Logger? */
            return Ok(categories);
        }

        [HttpGet("categories/{id}")]
        public async Task<IActionResult> GetCategoryById(int id)
        {
            Category? category = await this._categoryService.GetById(id);
            /* Logger? */
            if (category != null)
            {
                return Ok(category);
            }
            return NotFound();
        }

        [HttpPost("categories")]
        public async Task<IActionResult> CreateCategory(CategoryDTO categoryDTO)
        {
            Category category = this._mapper.Map<Category>(categoryDTO);
            await this._categoryService.Add(category);
            int categoryId = category.CategoryId; //works only if we save first
            if (categoryId > 0) /* category created successfully */
            {
                return Ok(categoryId);
            }
            return BadRequest();
        }

        [HttpPut("categories/{id}")]
        public async Task<IActionResult> UpdateCategory(int id, CategoryDTO categoryDTO)
        {
            if (await this._categoryService.GetById(id) != null)
            {
                Category category = this._mapper.Map<Category>(categoryDTO);
                category.CategoryId = id;
                await this._categoryService.Update(category);
                return Ok();
            }
            return BadRequest();
        }

        [HttpDelete("categories/{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            bool success = await this._categoryService.Remove(id);
            if (success)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet("categories/{categoryId}/sub-categories")]
        public async Task<IActionResult> GetCategorySubCategories(int categoryId)
        {
            return Ok(await _categoryService.GetFiltered(new SubCategoryFilter(categoryId).ExcludeSelf()));
        }

        [HttpGet("categories/{categoryId}/parent-tree")]
        public async Task<IActionResult> GetCategoryParentTree(int categoryId)
        {
            return Ok(await _categoryService.GetFiltered(new ParentCategoryFilter(categoryId)));
        }
    }
}
