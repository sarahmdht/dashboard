import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeServicesService } from '../services/theme-services.service';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-top-20-slider',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './top-20-slider.component.html',
  styleUrl: './top-20-slider.component.css'
})
export class Top20SliderComponent {
  darkMode = false;
  constructor(private themeService: ThemeServicesService) {
    $(document).ready(function () {
      const slider = ($('#top20') as any).bxSlider({
        infiniteloop: true,
        slideWidth: 150,
      minSlides: 2,
      maxSlides: 6,
      slideMargin: 10,
        });
    });
  }


  

  ngOnInit(): void {
    this.themeService.darkMode$.subscribe(darkMode => {
      this.darkMode = darkMode;
    });
}
}
