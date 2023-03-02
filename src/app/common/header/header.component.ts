import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  logoutstatus: boolean = false;
  currentUser: any;
  cartCount: number = 0;
  loginStatus: boolean = false;
  
  public searchTerm !: string;
  
  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.checkLogin();
    this.cartService.getProducts().subscribe((res) => {
      this.cartCount = res.length;
      if (res.length > 0) {
        Swal.fire({
          title: 'Products added to the cart!',
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: 'Ok',
        })
      }
    });
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  checkLogin() {
    if (localStorage.getItem('token') != null) {
      this.logoutstatus = true;
    }
  }

  logout(): void {
    Swal.fire({
      title: 'Are you sure? You want to logout!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout',
    }).then((result) => {
      if (result.isConfirmed) {
        this.logoutstatus = false;
        localStorage.removeItem('token');
        this.router.navigate(['/loginform']);
      }
    });
  }
}
