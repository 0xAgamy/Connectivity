using System;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using API.DTOs;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class Seed
{   
    
    public static async Task SeedData(AppDbContext _context)
    {
        if (await _context.Set<AppUser>().AnyAsync() )return ;

        var memberData= await File.ReadAllTextAsync("Data/UserSeedData.json");
        var members= JsonSerializer.Deserialize<List<UserSeedDTO>>(memberData);
        if (members is null){ Console.WriteLine("No members to seed"); return ;}


        foreach(var member in members)
        {
            var hmac= new HMACSHA512();

            var user = new AppUser
            {
                Id= member.Id,
                Email= member.Email,
                DisplayName= member.DisplayName,
                ImgUrl= member.ImageUrl,
                PasswordHash= hmac.ComputeHash(Encoding.UTF8.GetBytes("Pa$$w0rd")),
                PasswordSalt= hmac.Key,
                member= new Member
                {
                    Id = member.Id,
                    DisplayName= member.DisplayName,
                    Description= member.Description,
                    DateOfBirth= member.DateOfBirth,
                    ImgUrl= member.ImageUrl,
                    City= member.City,
                    Country= member.Country,
                    Gender= member.Gender,
                    LastActive= DateTime.UtcNow,
                    CreatedOn= DateTime.UtcNow,

                }

            };
            user.member.Photos.Add(new Photo
            {
                Url= member.ImageUrl,
                MemberId= member.Id,

            });

            _context.Add(user);
        }
        await _context.SaveChangesAsync();
    }
}
