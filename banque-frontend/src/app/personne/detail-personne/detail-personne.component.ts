import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Personne } from 'src/app/models/personne';
import { CompteService } from 'src/app/services/compte/compte.service';
import { PersonneService } from 'src/app/services/personne/personne.service';

const id = localStorage.getItem('access_token');
@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent implements OnInit{
  personne: Personne;
  detailsForm: FormGroup;
  search:any;
  comptes:any;
  page:number = 1;
count:number = 0;
tableSize:number= 5;
tableSizes:any=[2,4,6,8];
ngOnInit():void{
  this.getPersonne();
}
  constructor(
    private actRoute: ActivatedRoute,    
    public personneService: PersonneService,
    public compteService: CompteService,
    public fb: FormBuilder,
    
  ) { 
   
  }

  private getPersonne(){
    this.compteService.getComptesList().subscribe((dat)=>{
    const i = dat.numero.length;
      for (let index = 0; index < i; index++) {
        if (dat[index].id==id.charAt) {
          this.comptes=dat[index];
        }
        
        
      }
     });
      console.log(this.comptes);
   
    this.personneService.getPersonne(id).subscribe((data) => {
      this.personne=data;
      
     
     
    });
  };
 
  onTableDataChange(event:any){
    this.page = event;
    this.getPersonne();
  }
 
}
