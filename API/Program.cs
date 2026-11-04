using API.Data;
using API.Interfaces;
using API.Middelware;
using API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);
builder.Configuration.AddJsonFile("Env/config.json");
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
       var tokenkey= builder.Configuration["TokenKey"] ?? throw new Exception("Cannot get Token Key");

       options.TokenValidationParameters= new TokenValidationParameters
       {
           ValidateIssuerSigningKey = true,
           IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(tokenkey)),
           ValidateIssuer = false,
           ValidateAudience = false
       };
    });

// Adding Services
builder.Services.AddScoped<ITokenService, TokenService>();
builder.Services.AddScoped<IMemberRepository,MemberRepository>();

builder.Services.AddDbContext<AppDbContext>(opt =>
{
    opt.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
});
var app = builder.Build();

app.UseMiddleware<ExceptionMiddleware>();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.MapOpenApi();
    
}

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

app.UseCors(x=>x.AllowAnyHeader().AllowAnyMethod().WithOrigins(
    "http://localhost:4200",
    "https://localhost:4200"
));   
app.MapControllers();

using var scope = app.Services.CreateScope();
var service= scope.ServiceProvider;
try
{
    var context= service.GetRequiredService<AppDbContext>();
    await context.Database.MigrateAsync();
    await Seed.SeedData(context);
}
catch(Exception ex)
{
    var logger=service.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An Error Occured during Migration");
}
app.Run();
