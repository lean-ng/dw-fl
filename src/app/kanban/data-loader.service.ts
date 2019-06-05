import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService implements Resolve<string> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<string> {

    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('Hurra!');
      }, 3000);
    });
  }
}
