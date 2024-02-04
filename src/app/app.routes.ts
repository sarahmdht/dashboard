import { Routes } from '@angular/router';
import { MiperfileComponent } from './miperfile/miperfile.component';
import { CapturaDeVentaComponent } from './captura-de-venta/captura-de-venta.component';
import { AgrigarHijosComponent } from './agrigar-hijos/agrigar-hijos.component';
import { MiDiagramaComponent } from './mi-diagrama/mi-diagrama.component';
import { MisPaginasComponent } from './mis-paginas/mis-paginas.component';
import { MiIngresosComponent } from './mi-ingresos/mi-ingresos.component';

export const routes: Routes = [
    { path: '', component: MiperfileComponent},
    { path: 'capturadeventa', component: CapturaDeVentaComponent},
    { path: 'agregarHijos', component: AgrigarHijosComponent},
    { path: 'miDiagrama', component: MiDiagramaComponent},
    { path: 'misPaginas', component: MisPaginasComponent},
    { path: 'miIngresos', component: MiIngresosComponent},
];
