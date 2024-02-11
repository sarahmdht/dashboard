import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeServicesService } from '../services/theme-services.service';
import { CalendarComponent } from '../calendar/calendar.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, CalendarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isSidebarOpen: boolean = true;
  isCollapsed = true;
  darkMode = false;

  // light/dark modes
  constructor(private themeService: ThemeServicesService) {}



  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

 

  ngOnInit(): void {
    this.themeService.darkMode$.subscribe(darkMode => {
      this.darkMode = darkMode;
    });
}

  // sidebar
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // accordion
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  
  
}
