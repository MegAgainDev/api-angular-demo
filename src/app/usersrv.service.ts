import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


//Http Client get method
public getUsers(): Observable<any> {
  const url = 'https://reqres.in/api/users?page=1';
  //return this.http.get<any>(url);
  return this.http.get(url);
}
}