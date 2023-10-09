import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePersonneComponent } from './personne/create-personne/create-personne.component';
import { UpdatePersonneComponent } from './personne/update-personne/update-personne.component';
import { ListPersonneComponent } from './personne/list-personne/list-personne.component';
import { CreateCompteComponent } from './compte/create-compte/create-compte.component';
import { UpdateCompteComponent } from './compte/update-compte/update-compte.component';
import { ListCompteComponent } from './compte/list-compte/list-compte.component';
import { DetailCompteComponent } from './compte/detail-compte/detail-compte.component';
import { DetailPersonneComponent } from './personne/detail-personne/detail-personne.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PersonneService } from './services/personne/personne.service';
import { CompteService } from './services/compte/compte.service';
import { LoginComponent } from './personne/login/login.component';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CreatePersonneComponent,
    UpdatePersonneComponent,
    ListPersonneComponent,
    CreateCompteComponent,
    UpdateCompteComponent,
    ListCompteComponent,
    DetailCompteComponent,
    DetailPersonneComponent,
    LoginComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    
  ],
  providers: [PersonneService,CompteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
