import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livre } from '../model/livre.model';

@Injectable({
  providedIn: 'root',
})
export class livreService {
  constructor(private _http: HttpClient) {}

  addLivre(data: any): Observable<any> {
    return this._http.post('http://localhost:8080/api/livres', data);
  }

 // updateLivre(id: number, data: any): Observable<any> {
   // return this._http.put(`http://localhost:8080/api/livres/${id}`, data);
  //}

  getLivreList(): Observable<Livre[]> {
    return this._http.get<Livre[]>('http://localhost:8080/api/livres');
  }

 // deleteLivre(id: number): Observable<any> {
   // return this._http.delete(`http://localhost:8080/api/livres/${id}`);
  //}
}
