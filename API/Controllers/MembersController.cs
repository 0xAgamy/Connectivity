using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;


[ApiController]
[Route("[controller]")]
public class MembersController: ControllerBase
{
    private readonly AppDbContext _dbContext;
    public MembersController(AppDbContext dbcontext)
    {
        _dbContext=dbcontext;
    }

    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<AppUser>>> GetAllMemebers()
    {
        var members= await _dbContext.Set<AppUser>().ToListAsync();
        return Ok(members);
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<IReadOnlyList<AppUser>>> GetMemberById(string id)
    {
        var member= await _dbContext.Set<AppUser>().FindAsync(id);
        if (null == member) return NotFound();
        return Ok(member);
    }  

     
}