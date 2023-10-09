import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Personne } from 'src/app/models/personne';
import { CompteService } from 'src/app/services/compte/compte.service';
import { PersonneService } from 'src/app/services/personne/personne.service';
import { NgModel } from '@angular/forms';
const id= localStorage.getItem('access_token');

@Component({
  selector: 'app-create-compte',
  templateUrl: './create-compte.component.html',
  styleUrls: ['./create-compte.component.css']
})
export class CreateCompteComponent implements OnInit{
  
  addForm:FormGroup;
  compte:any=[];
 
  perso:Personne;
  ngOnInit(): void {
    this.addCompte();
    this.getPersonne();
  }

  
public getPersonne(){
 
 console.log(id);
 if(id!=null){
  this.personneService.getPersonne(id).subscribe( 
    (response)=>{
      this.perso=response;

      console.log(response);
      console.log(this.perso);
    },
    (error)=>{
      console.log(error);
    }
  );
 };
 
}
constructor(
  public fb: FormBuilder,
  private ngZone: NgZone,
  private router: Router,
  public compteService: CompteService,
  public personneService: PersonneService
) {}

addCompte() {
  this.addForm = this.fb.group({
    somme: [],
    numero: [''],
    personne:[]
   
   
  });
}

submitForm(){
  
  this.compteService.createCompte(this.addForm.value)
  .subscribe((res)=>{
    console.log(this.addForm.value);
    alert(this.addForm.value);

    this.ngZone.run(()=>this.router.navigateByUrl('/accueil/'+id));
  });
}
}
