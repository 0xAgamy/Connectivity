using System.Net;
using System.Text.Json;
using API.Errors;

namespace API.Middelware;
public class ExceptionMiddleware(RequestDelegate _next,
                                ILogger<ExceptionMiddleware> _logger,
                                IHostEnvironment env)
{

    public async Task InvokeAsync(HttpContext _context)
    {
        try
        {
            await _next(_context);    
        }
        catch(Exception ex )
        {
            _logger.LogError(ex,"{message}", ex.Message);
            _context.Response.StatusCode= (int)HttpStatusCode.InternalServerError;

            var response = env.IsDevelopment()
            ? new ApiExceptions(_context.Response.StatusCode ,ex.Message, ex.StackTrace)
            :  new ApiExceptions(_context.Response.StatusCode ,ex.Message, "Internal Server Error");


            var options= new JsonSerializerOptions
            {
                PropertyNamingPolicy= JsonNamingPolicy.CamelCase
            };
            var json= JsonSerializer.Serialize(response,options );

            await _context.Response.WriteAsync(json);
            
        }

    }



}
