import { Injectable } from '@angular/core';
import { Router, NavigationCancel } from '@angular/router';
import { filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = false;

  constructor(private router: Router) {

    router.events.pipe( filter( ev => ev instanceof NavigationCancel))
      .subscribe( () => {
        router.navigateByUrl('/login');
      });
   }

  login() {
    this.isAuthenticated = true;
  }

}
