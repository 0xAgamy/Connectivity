using System;
using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class MemberRepository(AppDbContext _context) : IMemberRepository
{
    public async Task<Member?> GetMemberAsync(string id)
    {
        return await _context.Set<Member>().FindAsync(id);
    }

    public async  Task<IReadOnlyList<Member>> GetMembersAsync()
    {
        return await _context.Set<Member>().ToListAsync();
    }

    public async  Task<IReadOnlyList<Photo>> GetPhotosForMemberAsync(string memberId)
    {
        return  await _context.Set<Photo>().Where(m=>m.MemberId== memberId).ToListAsync();
    }

    public async Task<bool> SaveAllAsync()
    {
        return await _context.SaveChangesAsync() > 0;
    }

    public void Update(Member member)
    {
        _context.Entry(member).State= EntityState.Modified;
    }
}
