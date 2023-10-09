import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/localStorage/auth.service';
import { PersonneService } from 'src/app/services/personne/personne.service';

@Component({
  selector: 'app-create-personne',
  templateUrl: './create-personne.component.html',
  styleUrls: ['./create-personne.component.css']
})
export class CreatePersonneComponent implements OnInit {
  addForm:FormGroup;
  personne:any=[];
  perso: any;

  ngOnInit(): void {
  
    this.addPersonne();
   }
   constructor(
     public fb: FormBuilder,
     private ngZone: NgZone,
     private router: Router,
     public personneService: PersonneService,
     public authService: AuthService
   ) {}
   
   addPersonne() {
     this.addForm = this.fb.group({
       nom: [''],
       prenom: [''],
       email: [''],
       password:['']
      
     });
   }
   
   submitForm(){
      this.authService.logout();
     this.personneService.createPersonne(this.addForm.value)
     .subscribe((res)=>{
       
      this.authService.setAccessToken(res.id); 
      this.perso=res;
      const id = localStorage.getItem('access_token');

      console.log(id);
        this.ngZone.run(()=>this.router.navigateByUrl("accueil/"+res.id));
     });
   }
   
   }
   