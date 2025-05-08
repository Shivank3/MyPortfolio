import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { Project } from '../../core/models/project.model';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <div class="bg-gray-50 py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p class="text-gray-600 text-lg">
            Check out some of my recent work that showcases my skills and experience.
          </p>
        </div>
        
        <!-- Filter buttons -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button 
            class="px-4 py-2 rounded-full transition-colors" 
            [class.bg-blue-600]="activeFilter === ''" 
            [class.text-white]="activeFilter === ''" 
            [class.bg-gray-200]="activeFilter !== ''" 
            [class.text-gray-700]="activeFilter !== ''" 
            (click)="filterProjects('')">
            All
          </button>
          <button 
            class="px-4 py-2 rounded-full transition-colors" 
            [class.bg-blue-600]="activeFilter === 'Full Stack'" 
            [class.text-white]="activeFilter === 'Full Stack'" 
            [class.bg-gray-200]="activeFilter !== 'Full Stack'" 
            [class.text-gray-700]="activeFilter !== 'Full Stack'" 
            (click)="filterProjects('Full Stack')">
            Full Stack
          </button>
          <button 
            class="px-4 py-2 rounded-full transition-colors" 
            [class.bg-blue-600]="activeFilter === 'Frontend'" 
            [class.text-white]="activeFilter === 'Frontend'" 
            [class.bg-gray-200]="activeFilter !== 'Frontend'" 
            [class.text-gray-700]="activeFilter !== 'Frontend'" 
            (click)="filterProjects('Frontend')">
            Frontend
          </button>
          <button 
            class="px-4 py-2 rounded-full transition-colors" 
            [class.bg-blue-600]="activeFilter === 'Backend'" 
            [class.text-white]="activeFilter === 'Backend'" 
            [class.bg-gray-200]="activeFilter !== 'Backend'" 
            [class.text-gray-700]="activeFilter !== 'Backend'" 
            (click)="filterProjects('Backend')">
            Backend
          </button>
        </div>
        
        <!-- Loading state -->
        <div *ngIf="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let i of [1, 2, 3, 4, 5, 6]" class="skeleton h-96 rounded-xl"></div>
        </div>
        
        <!-- Project Grid -->
        <div *ngIf="!loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ng-container *ngIf="filteredProjects.length; else noProjects">
            <app-project-card 
              *ngFor="let project of filteredProjects" 
              [project]="project" 
              class="fade-in">
            </app-project-card>
          </ng-container>
          
          <ng-template #noProjects>
            <div class="col-span-3 text-center py-12">
              <p class="text-xl text-gray-500">No projects found in this category.</p>
            </div>
          </ng-template>
        </div>
      </div>
    </div>
  `,
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  activeFilter = '';
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.apiService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.filteredProjects = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
        this.loading = false;
      }
    });
  }

  filterProjects(category: string): void {
    this.activeFilter = category;
    
    if (!category) {
      this.filteredProjects = this.projects;
      return;
    }
    
    this.filteredProjects = this.projects.filter(
      project => project.category === category
    );
  }
}