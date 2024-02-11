import { Component } from '@angular/core';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { ThemeServicesService } from '../services/theme-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-captura-de-venta',
  standalone: true,
  imports: [UploadFileComponent, CommonModule],
  templateUrl: './captura-de-venta.component.html',
  styleUrl: './captura-de-venta.component.css'
})
export class CapturaDeVentaComponent {
  darkMode = false;

  constructor(private themeService: ThemeServicesService) {}

  ngOnInit(): void {
    this.themeService.darkMode$.subscribe(darkMode => {
      this.darkMode = darkMode;
    });
}
}
