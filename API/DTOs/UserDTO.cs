using System;

namespace API.DTOs;

public class UserDTO
{
    public string Id {get; set;}
    public string DisplayName {get; set;}

    public string Email {get; set;}

    public string? ImgUrl {get; set;}

    public string Token {get; set;}
}
