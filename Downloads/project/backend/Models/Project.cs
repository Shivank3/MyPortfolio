namespace Backend.Models;

public class Project
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public string ProjectUrl { get; set; } = string.Empty;
    public string GitHubUrl { get; set; } = string.Empty;
    public List<string> Technologies { get; set; } = new List<string>();
    public DateTime Date { get; set; }
    public bool Featured { get; set; }
    public string Category { get; set; } = string.Empty;
}