import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../TypeDefs/users';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  allUsers: Users[] = [];
  constructor(private http: HttpClient) { }

  fetchUsers() {
    this.http
      .get<{ [key: string]: Users }>(
        'https://mern-project-a9f3d-default-rtdb.firebaseio.com/users.json'
      )
      .pipe(
        map((res) => {
          const userss = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              userss.push({ ...res[key], id: key });
            }
          }
          return userss;
        })
      )
      .subscribe((userss) => {
        this.allUsers = userss;
        console.log("login allUsers", this.allUsers)
      });
  }
  
}
