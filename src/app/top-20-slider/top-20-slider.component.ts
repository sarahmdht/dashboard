import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-top-20-slider',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-20-slider.component.html',
  styleUrl: './top-20-slider.component.css'
})
export class Top20SliderComponent {
  constructor() {
    $(document).ready(function () {
      const slider = ($('#top20') as any).bxSlider({
        infiniteloop: true,
        slideWidth: 110,
      minSlides: 2,
      maxSlides: 6,
      slideMargin: 20
        });
    });
  }
}
