import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Users } from '../TypeDefs/users';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss'],
})
export class AllusersComponent implements OnInit {
  allUsers: Users[] = [];
  public productList: any;
  public filterCategory: any;
  searchKey: string = '';
  currentUserId: string;
  currentUserValue : Users;

  @ViewChild('userForm') form : NgForm;

  constructor(private http: HttpClient, private cartService:CartService) {}

  ngOnInit() {
    this.fetchUsers();
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

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
        this.productList = userss;
        this.filterCategory = userss;
        console.log(this.allUsers);
      });
  }

  deleteUser(id:string){
    this.http.delete('https://mern-project-a9f3d-default-rtdb.firebaseio.com/users/'+id+'.json')
    .subscribe((dUser)=>{
      if (dUser != null) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Amazing!',
          text: 'User Deletion Successful!',
          showConfirmButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            this.fetchUsers();
          }
        });
      }
    })
  }

  editUser(id:string){
    this.currentUserId = id;
    let currentUSer = this.allUsers.find((cuser)=>{ return cuser.id === id});
    console.log(currentUSer);
    this.form.setValue({
      name:currentUSer.name,
      email:currentUSer.email,
      mobile:currentUSer.mobile,
      age:currentUSer.age
    })
  }

  updateUser(){
    console.log("this.currentUserId", this.currentUserId)
    console.log("form", this.form.value)
    this.http.put('https://mern-project-a9f3d-default-rtdb.firebaseio.com/users/'+this.currentUserId+'.json', this.form.value)
    .subscribe((uUser)=>{
      if (uUser != null) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Amazing!',
          text: 'Updation Successful!',
          showConfirmButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            this.fetchUsers();
          }
        });
      }
    })
  }

  // deleteAllUser(){
  //   this.http.delete('https://mern-project-a9f3d-default-rtdb.firebaseio.com/users.json')
  //   .subscribe((result)=>{
  //     console.log("result", result);
  //   })
  // }

  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
}
