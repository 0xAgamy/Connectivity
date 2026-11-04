using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class AppDbContext: DbContext
{
    public AppDbContext(DbContextOptions options): base(options){}

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<AppUser>().ToTable("Users");
        modelBuilder.Entity<Member>().ToTable("Memebers");
        modelBuilder.Entity<Photo>().ToTable("Photos");

    }
}