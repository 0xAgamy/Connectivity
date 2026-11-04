using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


[ApiController]
[Route("api/[controller]")]
[Authorize]

public class MembersController(IMemberRepository _memberRepository): ControllerBase
{
   

    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<Member>>> GetAllMemebers()
    {
        var members= await _memberRepository.GetMembersAsync();
        return Ok(members);
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Member>> GetMemberById(string id)
    {
        var member= await _memberRepository.GetMemberAsync(id);
        if (null == member) return NotFound();
        return Ok(member);
    }  


    [HttpGet("{id}/photos")]
    public async Task<ActionResult<IReadOnlyList<Photo>>> GetMemberPhoto(string id)
    {
        return Ok(await _memberRepository.GetPhotosForMemberAsync(id));
        
    }


     
}