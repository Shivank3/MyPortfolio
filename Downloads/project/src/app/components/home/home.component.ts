import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { ProjectCardComponent } from '../projects/project-card/project-card.component';
import { Profile } from '../../core/models/profile.model';
import { Project } from '../../core/models/project.model';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, ProjectCardComponent],
  template: `
    <app-hero></app-hero>
    
    <section id="projects" class="section bg-gray-50">
      <div class="container">
        <div class="text-center mb-12 slide-up">
          <h2 class="text-3xl font-bold">Featured Projects</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Check out some of my recent work that showcases my skills and experience.
          </p>
        </div>
        
        <div *ngIf="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let i of [1, 2, 3]" class="skeleton h-96 rounded-xl"></div>
        </div>
        
        <div *ngIf="!loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <app-project-card 
            *ngFor="let project of featuredProjects" 
            [project]="project" 
            class="slide-up">
          </app-project-card>
        </div>
        
        <div class="text-center mt-12">
          <a routerLink="/projects" class="btn btn-outline">
            View All Projects
          </a>
        </div>
      </div>
    </section>

    <section class="section bg-white">
      <div class="container">
        <div class="text-center mb-12 slide-up">
          <h2 class="text-3xl font-bold">My Skills</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I specialize in.
          </p>
        </div>
        
        <div *ngIf="loading" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div *ngFor="let i of [1, 2, 3, 4, 5, 6, 7, 8]" class="skeleton h-16 rounded-lg"></div>
        </div>
        
        <div *ngIf="!loading" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div *ngFor="let skill of profile?.skills" class="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center">
              <div class="mr-3">
                <div class="w-2 h-2 rounded-full" [ngClass]="{
                  'bg-red-500': skill.category === 'Frontend',
                  'bg-blue-500': skill.category === 'Backend',
                  'bg-green-500': skill.category === 'Database',
                  'bg-purple-500': skill.category === 'DevOps'
                }"></div>
              </div>
              <div>
                <h4 class="font-semibold mb-1">{{ skill.name }}</h4>
                <div class="flex">
                  <div *ngFor="let i of [1, 2, 3, 4, 5]" class="w-4 h-1 mr-1 rounded-sm"
                    [ngClass]="i <= skill.proficiency ? 'bg-blue-500' : 'bg-gray-300'"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-teal-600 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Amazing Together</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          Interested in working together? I'm always open to discussing product design and development work.
        </p>
        <a routerLink="/contact" class="btn bg-white text-teal-700 hover:bg-gray-100">
          Get In Touch
        </a>
      </div>
    </section>
  `
})
export class HomeComponent {
  profile: Profile | null = null;
  featuredProjects: Project[] = [];
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadProfile();
    this.loadFeaturedProjects();
  }

  loadProfile(): void {
    this.apiService.getProfile().subscribe({
      next: (data) => {
        this.profile = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading profile:', error);
        this.loading = false;
      }
    });
  }

  loadFeaturedProjects(): void {
    this.apiService.getFeaturedProjects().subscribe({
      next: (data) => {
        this.featuredProjects = data;
      },
      error: (error) => {
        console.error('Error loading featured projects:', error);
      }
    });
  }
}