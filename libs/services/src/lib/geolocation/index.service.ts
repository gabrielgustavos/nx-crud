import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  constructor(private http: HttpClient) {}

  getCurrentLocation(): Promise<GeolocationPosition | null> {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position);
          },
          (error) => {
            console.error('Erro ao obter a localização:', error);
            resolve(null);
          }
        );
      } else {
        console.error('Geolocalização não suportada no navegador.');
        resolve(null);
      }
    });
  }

  getCityFromCoordinates(latitude: number, longitude: number): Observable<any> {
    // Use a URL da API do OpenWeatherMap
    const openWeatherMapUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=SUA_CHAVE_DE_API`;

    return this.http.get(openWeatherMapUrl);
  }
}
