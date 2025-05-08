import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header [class]="headerClass">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <a routerLink="/" class="text-2xl font-bold text-blue-600">Portfolio</a>
          
          <!-- Mobile menu button -->
          <button 
            class="md:hidden focus:outline-none"
            (click)="isMenuOpen = !isMenuOpen"
            aria-label="Toggle navigation menu">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                *ngIf="!isMenuOpen" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16" />
              <path 
                *ngIf="isMenuOpen" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <!-- Desktop navigation -->
          <nav class="hidden md:block">
            <ul class="flex space-x-8">
              <li>
                <a 
                  routerLink="/" 
                  routerLinkActive="text-blue-600 font-semibold" 
                  [routerLinkActiveOptions]="{exact: true}"
                  class="text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a 
                  routerLink="/about" 
                  routerLinkActive="text-blue-600 font-semibold" 
                  class="text-gray-700 hover:text-blue-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a 
                  routerLink="/projects" 
                  routerLinkActive="text-blue-600 font-semibold" 
                  class="text-gray-700 hover:text-blue-600 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a 
                  routerLink="/contact" 
                  routerLinkActive="text-blue-600 font-semibold" 
                  class="text-gray-700 hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        <!-- Mobile navigation -->
        <nav 
          class="md:hidden"
          [class.hidden]="!isMenuOpen"
          [class.block]="isMenuOpen">
          <ul class="py-4 space-y-4">
            <li>
              <a 
                routerLink="/" 
                routerLinkActive="text-blue-600 font-semibold" 
                [routerLinkActiveOptions]="{exact: true}"
                class="text-gray-700 hover:text-blue-600 transition-colors block py-2"
                (click)="isMenuOpen = false">
                Home
              </a>
            </li>
            <li>
              <a 
                routerLink="/about" 
                routerLinkActive="text-blue-600 font-semibold" 
                class="text-gray-700 hover:text-blue-600 transition-colors block py-2"
                (click)="isMenuOpen = false">
                About
              </a>
            </li>
            <li>
              <a 
                routerLink="/projects" 
                routerLinkActive="text-blue-600 font-semibold" 
                class="text-gray-700 hover:text-blue-600 transition-colors block py-2"
                (click)="isMenuOpen = false">
                Projects
              </a>
            </li>
            <li>
              <a 
                routerLink="/contact" 
                routerLinkActive="text-blue-600 font-semibold" 
                class="text-gray-700 hover:text-blue-600 transition-colors block py-2"
                (click)="isMenuOpen = false">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  isMenuOpen = false;
  isScrolled = false;
  
  get headerClass(): string {
    return this.isScrolled 
      ? 'fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-all duration-300' 
      : 'absolute top-0 left-0 right-0 bg-transparent z-50 transition-all duration-300';
  }
  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}