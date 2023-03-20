using BusinessLogic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using PatientFluentApi.Entities;

namespace LoginService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientLoginController : ControllerBase
    {
        ILogic logic;

        public PatientLoginController(ILogic logic)
        {
            this.logic = logic;
        }

        [HttpGet("Get")]

        public IActionResult Get([FromQuery] string email, [FromQuery] string password) 
        {
            try
            {
                var result = logic.GetPatient(email, password);
                return Ok(result);
            }
            catch (SqlException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("Add")]

        public IActionResult Add([FromBody] PatientLogin patientLogin)
        {
            try
            {
                var patient = logic.AddPatient(patientLogin);
                return CreatedAtAction("Add", patient);
            }
            catch (SqlException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("Update")]

        public IActionResult Update([FromBody] PatientLogin patientLogin)
        {
            try
            {
                var patient = logic.UpdatePatient(patientLogin);
                return Ok(patient);
            }
            catch (SqlException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("Delete")]

        public IActionResult Delete([FromQuery] string email)
        {
            try
            {
                var patient = logic.DeletePatient(email);
                return Ok(patient);
            }
            catch (SqlException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
