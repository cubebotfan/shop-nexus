using AutoMapper;
using BLL;
using Microsoft.AspNetCore.Mvc;
using ShopNexus.Entities;
using ShopNexus.Entities.DTO;

/* Template Controller that came with the project. Delete this later once we have an actual controller */

namespace ShopNexus.Server.Controllers
{
    [ApiController]
    /*[Route("[controller]")]*/
    public class ProductController : ControllerBase
    {
        private readonly IGenericService<Product> _productService;
        private readonly IMapper _mapper;


        public ProductController(IGenericService<Product> productService, IMapper mapper)
        {
            this._productService = productService;
            this._mapper = mapper;
        }

        [HttpGet("products")]
        public async Task<IActionResult> GetAllProducts()
        {
            List<Product> products = await this._productService.GetAll();
            /* Logger? */
            return Ok(products);
        }

        [HttpGet("products/{id}")]
        public async Task<IActionResult> GetProductById(int id)
        {
            Product? product = await this._productService.GetById(id);
            /* Logger? */
            if (product != null)
            {
                return Ok(product);
            }
            return NotFound();
        }

        [HttpPost("products")]
        public async Task<IActionResult> CreateProduct(ProductDTO productDTO)
        {
            Product product = this._mapper.Map<Product>(productDTO);
            await this._productService.Add(product);
            int productId = product.ProductId; //works only if we save first
            if (productId > 0) /* product created successfully */
            {
                return Ok(productId);
            }
            return BadRequest();
        }

        [HttpPut("products/{id}")]
        public async Task<IActionResult> UpdateProduct(int id, ProductDTO productDTO)
        {
            if (await this._productService.GetById(id) != null)
            {
                Product product = this._mapper.Map<Product>(productDTO);
                product.ProductId = id;
                await this._productService.Update(product);
                return Ok();
            }
            return BadRequest();
        }

        [HttpDelete("products/{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            bool success = await this._productService.Remove(id);
            if (success)
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
