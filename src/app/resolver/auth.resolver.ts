import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class Auth implements CanActivate {
  constructor(private _router: Router) {
  }
  canActivate() {
    if (localStorage.getItem('customerToken')) {
      return true;
    }
    else{
        this._router.navigate(['auth/login']);
    }
  }
}