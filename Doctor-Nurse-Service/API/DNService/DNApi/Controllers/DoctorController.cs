using BusinessLogicLayer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DNApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorLogic _logic;
        public DoctorController(IDoctorLogic logic)
        {
            _logic = logic;
        }

        [HttpGet("byId")]
        public IActionResult GetById([FromQuery] Guid id)
        {
            try
            {
                var res = _logic.GetById(id);
                if(res != null)
                {
                    return Ok(res);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return BadRequest();
        }

        [HttpGet("getAllDoctor")]
        public IActionResult GetAll()
        {
            try
            {
                var res = _logic.GetAll();
                if (res != null)
                {
                    return Ok(res);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return BadRequest();
        }

        [HttpPost("addDoctor")]
        public IActionResult Add(DataLayer.Entities.Doctor doctor)
        {
            try
            {
                doctor.Id = Guid.NewGuid();
                string res = _logic.AddDoctor(doctor);
                if (res != "1")
                {
                    return BadRequest();
                }
                else
                {
                    return Created("added", doctor);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return BadRequest();
        }
    }
}
