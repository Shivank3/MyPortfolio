import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Profile } from '../models/profile.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // Profile endpoints
  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/profile`);
  }

  // Projects endpoints
  getProjects(category?: string): Observable<Project[]> {
    let url = `${this.apiUrl}/projects`;
    if (category) {
      url += `?category=${category}`;
    }
    return this.http.get<Project[]>(url);
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/projects/${id}`);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projects/featured`);
  }
}