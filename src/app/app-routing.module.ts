import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './conponents/info/info.component';
import { HomeComponent } from './conponents/home/home.component';
import { ContactComponent } from './conponents/contact/contact.component';
import { PruebaComponent } from './conponents/prueba/prueba.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'info/:id', component: InfoComponent},
  {path:'contact', component: ContactComponent},
  {path:'prueba', component: PruebaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
