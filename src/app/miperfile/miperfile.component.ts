import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-miperfile',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './miperfile.component.html',
  styleUrl: './miperfile.component.css'
})
export class MiperfileComponent {

}
