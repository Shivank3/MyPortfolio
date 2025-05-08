import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="bg-gray-50 py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-center">Get In Touch</h1>
          <p class="text-gray-600 text-lg text-center mb-12">
            Have a question or want to work together? Feel free to contact me!
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Contact form -->
            <div class="bg-white rounded-xl shadow-md p-6 md:p-8 fade-in">
              <h2 class="text-2xl font-bold mb-6">Send a Message</h2>
              
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
                <div class="mb-4">
                  <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    formControlName="name"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    [class.border-red-500]="showErrors && f.name.errors"
                  />
                  <p *ngIf="showErrors && f.name.errors?.['required']" class="mt-1 text-red-500 text-sm">
                    Name is required
                  </p>
                </div>
                
                <div class="mb-4">
                  <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    formControlName="email"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    [class.border-red-500]="showErrors && f.email.errors"
                  />
                  <p *ngIf="showErrors && f.email.errors?.['required']" class="mt-1 text-red-500 text-sm">
                    Email is required
                  </p>
                  <p *ngIf="showErrors && f.email.errors?.['email']" class="mt-1 text-red-500 text-sm">
                    Please enter a valid email address
                  </p>
                </div>
                
                <div class="mb-4">
                  <label for="subject" class="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    formControlName="subject"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    [class.border-red-500]="showErrors && f.subject.errors"
                  />
                  <p *ngIf="showErrors && f.subject.errors?.['required']" class="mt-1 text-red-500 text-sm">
                    Subject is required
                  </p>
                </div>
                
                <div class="mb-6">
                  <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    formControlName="message"
                    rows="5"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    [class.border-red-500]="showErrors && f.message.errors"
                  ></textarea>
                  <p *ngIf="showErrors && f.message.errors?.['required']" class="mt-1 text-red-500 text-sm">
                    Message is required
                  </p>
                </div>
                
                <div *ngIf="formSubmitted && !formError" class="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
                  Thank you for your message! I'll get back to you soon.
                </div>
                
                <div *ngIf="formError" class="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                  {{ formError }}
                </div>
                
                <button 
                  type="submit" 
                  class="btn btn-primary w-full"
                  [disabled]="isSubmitting">
                  <svg *ngIf="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
              </form>
            </div>
            
            <!-- Contact info -->
            <div>
              <div class="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8 slide-up">
                <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <h4 class="text-lg font-medium">Email</h4>
                      <a href="mailto:jane.doe&#64;example.com" class="text-gray-600 hover:text-blue-600">
                        jane.doe&#64;example.com
                      </a>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <h4 class="text-lg font-medium">Phone</h4>
                      <a href="tel:+15551234567" class="text-gray-600 hover:text-blue-600">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <h4 class="text-lg font-medium">Social Media</h4>
                      <div class="flex space-x-4 mt-2">
                        <a href="#" class="text-gray-500 hover:text-blue-600 transition-colors">
                          <span class="sr-only">LinkedIn</span>
                          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                          </svg>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-gray-900 transition-colors">
                          <span class="sr-only">GitHub</span>
                          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                          </svg>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-blue-400 transition-colors">
                          <span class="sr-only">Twitter</span>
                          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="bg-blue-600 rounded-xl shadow-md p-6 md:p-8 text-white slide-up">
                <h3 class="text-xl font-bold mb-4">Working Hours</h3>
                <p class="mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Weekend: Available for urgent inquiries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });
  
  showErrors = false;
  isSubmitting = false;
  formSubmitted = false;
  formError: string | null = null;
  
  get f() { return this.contactForm.controls; }
  
  onSubmit(): void {
    this.showErrors = true;
    
    if (this.contactForm.invalid) {
      return;
    }
    
    this.isSubmitting = true;
    this.formError = null;
    
    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      this.formSubmitted = true;
      this.contactForm.reset();
      this.showErrors = false;
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        this.formSubmitted = false;
      }, 5000);
    }, 1500);
  }
}