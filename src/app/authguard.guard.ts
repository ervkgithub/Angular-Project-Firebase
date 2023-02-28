import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from '../app/service/authguard.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthguardService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.auth.isUserLoggedIn()) {
      console.log('sdf', this.auth.isUserLoggedIn());
     // this.router.navigate(['/profile']);
      return true;
    }
    this.router.navigate(['/loginform']);
    return false;
  }
}
