import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './principal/home/home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NosotrosComponent } from './modules/posts/nosotros.component';
import { GestionComponent } from './modules/gestion/gestion.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { GaleriaComponent } from './modules/galeria/galeria.component';




export const routes: Routes = [{
  // { path:  '', pathMatch:  'full', redirectTo:  'home'},
  // { path: 'home', component: HomeComponent},
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
    path: 'galeria',
    component: GaleriaComponent
  },{
    path: 'contacto',
    component: ContactoComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
