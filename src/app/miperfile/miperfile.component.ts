import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Top20SliderComponent } from '../top-20-slider/top-20-slider.component';

@Component({
  selector: 'app-miperfile',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, Top20SliderComponent],
  templateUrl: './miperfile.component.html',
  styleUrl: './miperfile.component.css'
})
export class MiperfileComponent {

}
