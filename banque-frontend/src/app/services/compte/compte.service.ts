import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { Compte } from 'src/app/models/compte';
import { Personne } from 'src/app/models/personne';
import { PersonneService } from '../personne/personne.service';

const baseURL= "http://localhost:8081/api/comptes";
const token = localStorage.getItem('access_token');

@Injectable({
  providedIn: 'root'
})
export class CompteService {
personne:any=[];
compte:Compte;
  constructor(private httpClient:HttpClient, public personneService:PersonneService) { }

  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     
    }),
  };

  

  
    getComptesList(): Observable<Compte>{
      return this.httpClient.get<Compte>(`${baseURL}`)
      ; 
   }
   getCompte(idCompte:any):Observable<Compte>{
    return this.httpClient.get<Compte>(`${baseURL}/${idCompte}`);
   }

  

  /* getToken(data):Observable<any>{
    return this.httpClient.post<any>
    (
      TokenURL, data,
      this.httpOption
     )
      .pipe(retry(1),catchError(this.errorHandle));
  
   }*/

   createCompte(data:any): Observable<any> {
    
    
    return this.httpClient.post<Compte>(
      baseURL, JSON.stringify(data),
      this.httpOptions)
      .pipe(retry(1),catchError(this.errorHandle));
  }
  updateCompte(Id:number, data:Compte): Observable<Compte> {
    return this.httpClient
      .put<Compte>(
        `${baseURL}/${Id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandle));
  }

  deleteCompte(Id:number): Observable<Compte> {
    return this.httpClient.delete<Compte>(`${baseURL}/${Id}`,this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandle));
  }

  errorHandle(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
