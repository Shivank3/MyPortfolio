namespace Backend.Models;

public class Profile
{
    public string Name { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Bio { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string LinkedIn { get; set; } = string.Empty;
    public string GitHub { get; set; } = string.Empty;
    public List<Skill> Skills { get; set; } = new List<Skill>();
    public List<Experience> Experience { get; set; } = new List<Experience>();
    public List<Education> Education { get; set; } = new List<Education>();
}

public class Skill
{
    public string Name { get; set; } = string.Empty;
    public int Proficiency { get; set; } // Scale of 1-5
    public string Category { get; set; } = string.Empty; // Frontend, Backend, Database, etc.
}

public class Experience
{
    public string Company { get; set; } = string.Empty;
    public string Position { get; set; } = string.Empty;
    public string StartDate { get; set; } = string.Empty;
    public string EndDate { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<string> Technologies { get; set; } = new List<string>();
}

public class Education
{
    public string Institution { get; set; } = string.Empty;
    public string Degree { get; set; } = string.Empty;
    public string Field { get; set; } = string.Empty;
    public string StartDate { get; set; } = string.Empty;
    public string EndDate { get; set; } = string.Empty;
}