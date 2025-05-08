using Microsoft.AspNetCore.Mvc;
using Backend.Models;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private static readonly List<Project> DemoProjects = new()
    {
        new Project
        {
            Id = 1,
            Title = "E-Commerce Platform",
            Description = "A full-stack e-commerce platform with customer and admin portals, payment processing, and inventory management.",
            ImageUrl = "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
            ProjectUrl = "https://example.com/ecommerce",
            GitHubUrl = "https://github.com/janedoe/ecommerce",
            Technologies = new List<string> { "ASP.NET Core", "Angular", "SQL Server", "Azure", "Stripe API" },
            Date = new DateTime(2022, 6, 15),
            Featured = true,
            Category = "Full Stack"
        },
        new Project
        {
            Id = 2,
            Title = "Task Management System",
            Description = "A collaborative task management system with real-time updates, notifications, and reporting.",
            ImageUrl = "https://images.pexels.com/photos/7654096/pexels-photo-7654096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
            ProjectUrl = "https://example.com/taskmanager",
            GitHubUrl = "https://github.com/janedoe/taskmanager",
            Technologies = new List<string> { "ASP.NET Core", "React", "MongoDB", "SignalR" },
            Date = new DateTime(2021, 11, 3),
            Featured = true,
            Category = "Full Stack"
        },
        new Project
        {
            Id = 3,
            Title = "Weather Dashboard",
            Description = "A responsive weather dashboard that displays forecasts, historical data, and interactive maps.",
            ImageUrl = "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
            ProjectUrl = "https://example.com/weather",
            GitHubUrl = "https://github.com/janedoe/weather",
            Technologies = new List<string> { "Angular", "TypeScript", "OpenWeatherMap API", "Chart.js" },
            Date = new DateTime(2021, 3, 20),
            Featured = false,
            Category = "Frontend"
        },
        new Project
        {
            Id = 4,
            Title = "API Gateway Service",
            Description = "A scalable API gateway service that handles routing, authentication, and rate limiting.",
            ImageUrl = "https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
            ProjectUrl = "https://example.com/apigateway",
            GitHubUrl = "https://github.com/janedoe/apigateway",
            Technologies = new List<string> { "ASP.NET Core", "Ocelot", "JWT", "Redis" },
            Date = new DateTime(2022, 1, 10),
            Featured = false,
            Category = "Backend"
        }
    };

    [HttpGet]
    public ActionResult<IEnumerable<Project>> Get([FromQuery] string? category = null)
    {
        var projects = DemoProjects;
        
        if (!string.IsNullOrEmpty(category))
        {
            projects = projects.Where(p => p.Category.Equals(category, StringComparison.OrdinalIgnoreCase)).ToList();
        }
        
        return Ok(projects);
    }

    [HttpGet("{id}")]
    public ActionResult<Project> Get(int id)
    {
        var project = DemoProjects.FirstOrDefault(p => p.Id == id);
        
        if (project == null)
        {
            return NotFound();
        }
        
        return Ok(project);
    }

    [HttpGet("featured")]
    public ActionResult<IEnumerable<Project>> GetFeatured()
    {
        var featuredProjects = DemoProjects.Where(p => p.Featured).ToList();
        return Ok(featuredProjects);
    }
}