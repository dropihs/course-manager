import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private  apiUrl = 'http://localhost:3000/animals';
  
  constructor(private http: HttpClient) { }
 /* remove(id:number){
        //this.http.delete<Animal>(`${this.apiUrl/${id}}`);  animals.filter((a) => animal.name !== a.name); Comando para excluir no front end
    return this.animals.filter((a) => animals.name !== a.name);
  }*/
  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl) // retorna um observable de animais
  }
  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`) // retorna um observable de um animal com o ID
  }
}

