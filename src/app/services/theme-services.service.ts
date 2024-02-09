import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeServicesService {
  private currentTheme: string = 'light';

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.currentTheme = savedTheme;
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.currentTheme);
    this.applyTheme();
  }

  private applyTheme(): void {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  }
 
}

