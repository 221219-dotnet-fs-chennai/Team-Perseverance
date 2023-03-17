using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BusinessLogic;

namespace AllergyServiceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AllergyController : ControllerBase
    {

        ILogic logic;

        public AllergyController(ILogic logic)
        {
            this.logic = logic;
        }

        [HttpGet("GetAllergies")]   
        public IActionResult Get() 
        {
            var details = logic.GetAllergies();
            if(details!=null)
            {
            return Ok(details);
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
