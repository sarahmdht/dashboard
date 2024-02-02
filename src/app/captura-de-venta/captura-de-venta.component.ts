import { Component } from '@angular/core';
import { UploadFileComponent } from '../upload-file/upload-file.component';

@Component({
  selector: 'app-captura-de-venta',
  standalone: true,
  imports: [UploadFileComponent],
  templateUrl: './captura-de-venta.component.html',
  styleUrl: './captura-de-venta.component.css'
})
export class CapturaDeVentaComponent {

}
