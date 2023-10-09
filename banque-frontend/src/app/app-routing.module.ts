import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonneComponent } from './personne/list-personne/list-personne.component';
import { LoginComponent } from './personne/login/login.component';
import { CreatePersonneComponent } from './personne/create-personne/create-personne.component';
import { DetailCompteComponent } from './compte/detail-compte/detail-compte.component';
import { UpdatePersonneComponent } from './personne/update-personne/update-personne.component';
import { CreateCompteComponent } from './compte/create-compte/create-compte.component';
import { DetailPersonneComponent } from './personne/detail-personne/detail-personne.component';
import { UpdateCompteComponent } from './compte/update-compte/update-compte.component';

const routes: Routes = [
  {path:'clients', component:ListPersonneComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'new-client', component:CreatePersonneComponent},
  {path:'accueil/:id', component:DetailPersonneComponent},
  {path:'modifier-info/:id', component:UpdatePersonneComponent},
  {path:'add-compte/:id', component:CreateCompteComponent},
  {path:'detail-compte/:id', component:DetailCompteComponent},
  {path:'modifier-compte/:id', component:UpdateCompteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
