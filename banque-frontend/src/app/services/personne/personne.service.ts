import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { Personne } from 'src/app/models/personne';


const baseURL= "http://localhost:8081/api/personnes";


const token = localStorage.getItem('access_token');

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  logout() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) {}
 
 
  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     
    }),
  };

  

  
    getPersonnesList(): Observable<Personne>{
      return this.httpClient.get<Personne>(baseURL)
      ; 
   }
   getPersonne(Id:any):Observable<Personne>{
    return this.httpClient.get<Personne>(`${baseURL}/${Id}`);
   }

   login(data:any): Observable<Personne> {
    return this.httpClient.post<Personne>(
      baseURL+"/login", JSON.stringify(data),
      this.httpOptions)
      .pipe(retry(1),catchError(this.errorHandle));
  }

  /* getToken(data):Observable<any>{
    return this.httpClient.post<any>
    (
      TokenURL, data,
      this.httpOption
     )
      .pipe(retry(1),catchError(this.errorHandle));
  
   }*/

   createPersonne(data): Observable<Personne> {
    return this.httpClient.post<Personne>(
      baseURL, JSON.stringify(data),
      this.httpOptions)
      .pipe(retry(1),catchError(this.errorHandle));
  }
  updatePersonne(Id:number, data:Personne): Observable<Personne> {
    return this.httpClient
      .put<Personne>(
        `${baseURL}/${Id}`,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandle));
  }

  deletePersonne(Id:number): Observable<Personne> {
    return this.httpClient.delete<Personne>(`${baseURL}/${Id}`,this.httpOptions)
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

