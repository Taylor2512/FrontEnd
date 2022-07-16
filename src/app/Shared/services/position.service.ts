import { Inject, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Servicesapp {
  constructor(
    public router:Router
  ) {}
  //OBTENER LA LATITUDE Y LONGITUD
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (resp) => {
          resolve({
            longitude: resp.coords.longitude,
            latitude: resp.coords.latitude,
          });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
  GetRedirect(url: string){
    this.router.navigateByUrl(url)

    }

}
