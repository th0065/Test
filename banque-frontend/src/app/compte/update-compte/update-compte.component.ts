import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteService } from 'src/app/services/compte/compte.service';

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css']
})
export class UpdateCompteComponent implements OnInit{
  Compte: any = [];
  updateCompteFrom: FormGroup;
  
  ngOnInit() {
    this.updateForm()
  }
  constructor(
    private actRoute: ActivatedRoute,    
    public compteService: CompteService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.compteService.getCompte(id).subscribe((data) => {
      this.updateCompteFrom = this.fb.group({
        id: [data.id],
        somme: [data.somme],
       
      })
    })
  }
  updateForm(){
    this.updateCompteFrom = this.fb.group({
      id: null,
      somme: [''],
     
    })    
  }
  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.compteService.updateCompte(Number(id), this.updateCompteFrom.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/'))
    })
  }
}
