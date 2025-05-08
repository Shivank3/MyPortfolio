import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div class="container mx-auto px-4 relative z-10 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          <span class="block">Hi, I'm Shivank Mangal</span>
          <span class="block text-amber-300">Software Engineer</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-100">
          Building elegant solutions to complex problems
        </p>
        <a 
          href="#projects" 
          class="btn btn-accent"
          onClick="document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })"
        >
          View My Work
        </a>
      </div>
    </section>
  `
})
export class HeroComponent {}