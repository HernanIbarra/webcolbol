import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NosotrosComponent } from './modules/posts/nosotros.component';
import { GestionComponent } from './modules/gestion/gestion.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { GaleriaComponent } from './modules/galeria/galeria.component';
import { ActividadComponent } from './modules/actividad/actividad.component';
import { NoticiasComponent } from './modules/noticias/noticias.component';


export const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'nosotros',
    component: NosotrosComponent
  }, {
    path: 'gestion',
    component: GestionComponent
  },{
    path: 'actividad',
    component: ActividadComponent
  },{
    path: 'galeria',
    component: GaleriaComponent
  },{
    path: 'contacto',
    component: ContactoComponent
  },{
    path: 'noticias',
    component: NoticiasComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
