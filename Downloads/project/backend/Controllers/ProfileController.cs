using Microsoft.AspNetCore.Mvc;
using Backend.Models;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProfileController : ControllerBase
{
    private static readonly Profile DemoProfile = new()
    {
        Name = "Jane Doe",
        Title = "Full Stack Developer",
        Bio = "Passionate software engineer with expertise in .NET Core and Angular. I enjoy creating efficient, scalable applications with elegant user interfaces.",
        Email = "jane.doe@example.com",
        Phone = "+1 (555) 123-4567",
        LinkedIn = "https://linkedin.com/in/janedoe",
        GitHub = "https://github.com/janedoe",
        Skills = new List<Skill>
        {
            new() { Name = "C#", Proficiency = 5, Category = "Backend" },
            new() { Name = "ASP.NET Core", Proficiency = 5, Category = "Backend" },
            new() { Name = "Angular", Proficiency = 4, Category = "Frontend" },
            new() { Name = "TypeScript", Proficiency = 4, Category = "Frontend" },
            new() { Name = "SQL Server", Proficiency = 4, Category = "Database" },
            new() { Name = "Entity Framework", Proficiency = 4, Category = "Backend" },
            new() { Name = "Azure", Proficiency = 3, Category = "DevOps" },
            new() { Name = "Docker", Proficiency = 3, Category = "DevOps" }
        },
        Experience = new List<Experience>
        {
            new()
            {
                Company = "Tech Solutions Inc.",
                Position = "Senior Software Engineer",
                StartDate = "2020-01",
                EndDate = "Present",
                Description = "Lead developer for enterprise applications using .NET Core and Angular.",
                Technologies = new List<string> { "C#", "ASP.NET Core", "Angular", "SQL Server", "Azure" }
            },
            new()
            {
                Company = "Digital Innovations",
                Position = "Software Developer",
                StartDate = "2017-05",
                EndDate = "2019-12",
                Description = "Developed and maintained web applications for various clients.",
                Technologies = new List<string> { "C#", "ASP.NET MVC", "JavaScript", "jQuery", "SQL Server" }
            }
        },
        Education = new List<Education>
        {
            new()
            {
                Institution = "University of Technology",
                Degree = "Bachelor of Science",
                Field = "Computer Science",
                StartDate = "2013",
                EndDate = "2017"
            }
        }
    };

    [HttpGet]
    public ActionResult<Profile> Get()
    {
        return Ok(DemoProfile);
    }
}