import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICatFact } from '../interfaces/Icatfact';

@Injectable({
  providedIn: 'root',
})
export class CatFactService {

  constructor(private http: HttpClient) {}

  getRandomCatFact(APIURL:string): Observable<any> {
    return this.http.get(APIURL);
  }

  getCatFacts(APIURL:string): Observable<ICatFact[]> {
    return this.http.get<ICatFact[]>(APIURL);  
  }
}