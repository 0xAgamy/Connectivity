using System;
using System.Text.Json.Serialization;

namespace API.Entities;

public class Member
{

    public string  Id { get; set; }= null!;
    public DateOnly DateOfBirth {get;set;}
    public string? ImgUrl {get;set;}

    public required string DisplayName {get;set;}

    public DateTime CreatedOn {get;set;} = DateTime.UtcNow;
    public DateTime LastActive {get;set;}=  DateTime.UtcNow;

    public required string Gender {get;set;}
    public string? Description {get;set;}
    public required string City {get;set;}

    public required string Country {get;set;}

    // nav
    [JsonIgnore]
    public List<Photo> Photos { get; set; }= [];
    [JsonIgnore]
    public AppUser User {get;set;}= null!;

}
