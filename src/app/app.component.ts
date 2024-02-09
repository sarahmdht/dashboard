import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ThemeServicesService } from './services/theme-services.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pakoa';
  isSidebarOpen: boolean = true;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  constructor(private themeService: ThemeServicesService) {}

  // ngOnInit(): void {
  //   // Initialize theme
  //   this.themeService.initializeTheme();
  // }
}
