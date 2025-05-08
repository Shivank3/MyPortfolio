import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-gray-50 py-20">
      <div class="container mx-auto px-4">
        <!-- Loading state -->
        <div *ngIf="loading" class="max-w-4xl mx-auto">
          <div class="skeleton h-12 w-3/4 mx-auto mb-8"></div>
          <div class="skeleton h-96 rounded-xl mb-8"></div>
          <div class="skeleton h-4 w-full mb-2"></div>
          <div class="skeleton h-4 w-full mb-2"></div>
          <div class="skeleton h-4 w-3/4 mb-8"></div>
          <div class="skeleton h-10 w-48 mx-auto"></div>
        </div>
        
        <!-- Project details -->
        <div *ngIf="!loading && project" class="max-w-4xl mx-auto fade-in">
          <a routerLink="/projects" class="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </a>
          
          <h1 class="text-4xl font-bold mb-4">{{ project.title }}</h1>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span *ngFor="let tech of project.technologies" 
              class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {{ tech }}
            </span>
          </div>
          
          <div class="bg-white rounded-xl overflow-hidden shadow-md mb-8">
            <img 
              [src]="project.imageUrl" 
              [alt]="project.title" 
              class="w-full h-80 object-cover"
            />
            
            <div class="p-6">
              <div class="prose max-w-none">
                <p class="text-gray-700 text-lg mb-6">{{ project.description }}</p>
              </div>
              
              <div class="flex flex-wrap gap-4 justify-center mt-8">
                <a [href]="project.projectUrl" target="_blank" rel="noopener" 
                   class="btn btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Live Demo
                </a>
                
                <a [href]="project.gitHubUrl" target="_blank" rel="noopener" 
                   class="btn btn-outline">
                  <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                  </svg>
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Not found state -->
        <div *ngIf="!loading && !project" class="max-w-4xl mx-auto text-center">
          <h2 class="text-2xl font-bold mb-4">Project Not Found</h2>
          <p class="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <a routerLink="/projects" class="btn btn-primary">
            View All Projects
          </a>
        </div>
      </div>
    </div>
  `,
})
export class ProjectDetailComponent implements OnInit {
  project: Project | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.loadProject(id);
      }
    });
  }

  loadProject(id: number): void {
    this.apiService.getProject(id).subscribe({
      next: (data) => {
        this.project = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading project:', error);
        this.loading = false;
      }
    });
  }
}