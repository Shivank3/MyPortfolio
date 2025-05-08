import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { Profile } from '../../core/models/profile.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-50 py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h1>
          
          <div *ngIf="loading" class="space-y-4">
            <div class="skeleton h-8 w-3/4 mx-auto mb-8"></div>
            <div class="skeleton h-64 rounded-xl mb-8"></div>
            <div class="skeleton h-4 w-full mb-2"></div>
            <div class="skeleton h-4 w-full mb-2"></div>
            <div class="skeleton h-4 w-3/4"></div>
          </div>
          
          <div *ngIf="!loading" class="bg-white rounded-xl shadow-md p-6 md:p-8 mb-12 fade-in">
            <div class="md:flex items-start">
              <div class="md:flex-1">
                <h2 class="text-2xl font-bold mb-4">{{ profile?.name }}</h2>
                <p class="text-blue-600 font-semibold mb-6">{{ profile?.title }}</p>
                <div class="prose max-w-none">
                  <p class="mb-4">{{ profile?.bio }}</p>
                </div>
                
                <div class="mt-6 space-y-3">
                  <div class="flex items-center">
                    <svg class="h-5 w-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{{ profile?.email }}</span>
                  </div>
                  
                  <div class="flex items-center">
                    <svg class="h-5 w-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{{ profile?.phone }}</span>
                  </div>
                  
                  <div class="flex space-x-4 mt-6">
                    <a [href]="profile?.linkedIn" target="_blank" rel="noopener" class="text-gray-500 hover:text-blue-600 transition-colors">
                      <span class="sr-only">LinkedIn</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                    </a>
                    <a [href]="profile?.gitHub" target="_blank" rel="noopener" class="text-gray-500 hover:text-gray-900 transition-colors">
                      <span class="sr-only">GitHub</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Experience Section -->
          <div class="mb-12">
            <h2 class="text-2xl font-bold mb-6">Experience</h2>
            
            <div *ngIf="loading" class="space-y-6">
              <div *ngFor="let i of [1, 2]" class="skeleton h-40 rounded-xl"></div>
            </div>
            
            <div *ngIf="!loading" class="space-y-6">
              <div *ngFor="let exp of profile?.experience" class="bg-white rounded-xl shadow-md p-6 slide-up">
                <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 class="text-xl font-semibold">{{ exp.position }}</h3>
                  <span class="text-gray-500 mt-1 md:mt-0">{{ exp.startDate }} - {{ exp.endDate }}</span>
                </div>
                <p class="text-blue-600 mb-3">{{ exp.company }}</p>
                <p class="text-gray-700 mb-4">{{ exp.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let tech of exp.technologies" 
                    class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Education Section -->
          <div>
            <h2 class="text-2xl font-bold mb-6">Education</h2>
            
            <div *ngIf="loading" class="space-y-6">
              <div class="skeleton h-32 rounded-xl"></div>
            </div>
            
            <div *ngIf="!loading" class="space-y-6">
              <div *ngFor="let edu of profile?.education" class="bg-white rounded-xl shadow-md p-6 slide-up">
                <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 class="text-xl font-semibold">{{ edu.degree }}</h3>
                  <span class="text-gray-500 mt-1 md:mt-0">{{ edu.startDate }} - {{ edu.endDate }}</span>
                </div>
                <p class="text-blue-600 mb-1">{{ edu.institution }}</p>
                <p class="text-gray-600">{{ edu.field }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AboutComponent implements OnInit {
  profile: Profile | null = null;
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadProfile();
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
}