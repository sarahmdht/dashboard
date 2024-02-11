import { Component } from '@angular/core';
import {MatSortModule} from '@angular/material/sort';
import { ThemeServicesService } from '../services/theme-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agrigar-hijos',
  standalone: true,
  imports: [MatSortModule, CommonModule],
  templateUrl: './agrigar-hijos.component.html',
  styleUrl: './agrigar-hijos.component.css'
})
export class AgrigarHijosComponent {
  darkMode = false;

  constructor(private themeService: ThemeServicesService) {}

  ngOnInit(): void {
    this.themeService.darkMode$.subscribe(darkMode => {
      this.darkMode = darkMode;
    });
}
}
