import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotocatService {

  private apiUrl = 'https://api.thecatapi.com/v1/images/search';

  constructor(private http: HttpClient) {}

  getCatImageUrl(): Observable<string> {
    return new Observable<string>((observer) => {
      this.http.get<any[]>(this.apiUrl).subscribe(
        (response) => {
        
          const catImageUrl = response[0]?.url;
          if (catImageUrl) {
            observer.next(catImageUrl); 
            observer.complete();
          } else {
            observer.error('No se encontró una URL de imagen');
          }
        },
        (error) => {
          observer.error('Error al obtener la imagen');
        }
      );
    });
  }
}
