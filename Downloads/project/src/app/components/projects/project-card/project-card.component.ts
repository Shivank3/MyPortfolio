import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="card h-full flex flex-col">
      <div class="relative overflow-hidden h-48">
        <img 
          [src]="project.imageUrl" 
          [alt]="project.title" 
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div class="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1">
          {{ project.category }}
        </div>
      </div>
      
      <div class="p-6 flex-grow flex flex-col">
        <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
        <p class="text-gray-600 mb-4 line-clamp-3 flex-grow">{{ project.description }}</p>
        
        <div class="flex flex-wrap gap-2 mb-4">
          <span *ngFor="let tech of project.technologies.slice(0, 3)" 
            class="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
            {{ tech }}
          </span>
          <span *ngIf="project.technologies.length > 3" 
            class="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
            +{{ project.technologies.length - 3 }} more
          </span>
        </div>
        
        <div class="flex justify-between items-center pt-2 border-t border-gray-100">
          <a [routerLink]="['/projects', project.id]" class="text-blue-600 hover:text-blue-700 font-medium">
            View Details
          </a>
          
          <div class="flex space-x-2">
            <a [href]="project.gitHubUrl" target="_blank" rel="noopener" class="text-gray-500 hover:text-gray-700 transition-colors">
              <span class="sr-only">GitHub</span>
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
            <a [href]="project.projectUrl" target="_blank" rel="noopener" class="text-gray-500 hover:text-gray-700 transition-colors">
              <span class="sr-only">Live Demo</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ProjectCardComponent {
  @Input() project!: Project;
}