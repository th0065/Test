import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Personne } from 'src/app/models/personne';
import { PersonneService } from 'src/app/services/personne/personne.service';
import { AuthService } from 'src/app/services/localStorage/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  email:string;
  password:string;
  userForm:FormGroup;
  perso:Personne;
  personne:Personne;
  constructor(
    private personneService: PersonneService,
    private authService: AuthService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    ) { }
  ngOnInit(): void {
    this.Log();  }


    Log() {
      this.userForm = this.fb.group({  
        email: [''],
        password: [''],
      });

     

    }  
      submitForm(){
        const data = {email:this.userForm.get("email").value,password:this.userForm.get("password").value};

        console.log(data);
        
      
        this.personneService.login(data)
        .subscribe((res)=>{
        this.authService.logout();
        this.authService.setAccessToken(res.id); 
        this.perso=res;
        const token =this.authService.getAccessToken;
          
        console.log(this.perso);
          this.ngZone.run(()=>this.router.navigateByUrl("accueil/"+res.id));
        });
      }
}
