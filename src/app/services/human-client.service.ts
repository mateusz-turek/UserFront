import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class HumanClientService {

  constructor(private http: HttpClient) {

   }

    public getHumans() :Observable<user>{
      return this.http.get<user>('http://localhost:8080/home/users')
    }

    public deleteHuman(id: string): void {
       this.http.delete('http://localhost:8080/home/delete/user/'+ id).subscribe()
    }

   public findHuman2(id: string): Observable<user>{
     return this.http.get<user>('http://localhost:8080/home/user/'+ id)
   }

   // public postHuman(humanModel: user): Observable<Object> {
   //   return this.http.post('http://localhost:8080/home/add',humanModel)
   //   .subscribe (data => {data = humanModel})

    public postHuman(humanModel: userData): Observable<userData>{
      return this.http.post<userData>('http://localhost:8080/home/add',
      humanModel)
    }

    onSubmit2(human: userData) {
      this.http.post('http://localhost:8080/home/add',human)
   }
  }

export interface user{
  name: String;
  surname: String;
  age: String;
}
export interface root{
  humanModel: user;
}
export interface userData{
  id: number;
  name: string;
  surname: string;
  age: string;
}

