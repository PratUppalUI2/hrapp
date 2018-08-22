import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})

export class LoginGuard implements CanActivate {
  constructor(private router:Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
     if (next.params['pass'] == 'pratap') {
       return true;
     }
     alert("Not Authorized");
     this.router.navigate(['/login']);
  }
}
