import { Routes } from '@angular/router';
import { MiperfileComponent } from './miperfile/miperfile.component';
import { CapturaDeVentaComponent } from './captura-de-venta/captura-de-venta.component';

export const routes: Routes = [
    { path: '', component: MiperfileComponent},
    { path: 'capturadeventa', component: CapturaDeVentaComponent},
];
