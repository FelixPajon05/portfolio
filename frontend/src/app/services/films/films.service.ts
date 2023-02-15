import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  apiKey = '5a00b167';
  URI: string;

  constructor(private httpClient: HttpClient) {
    this.URI = `http://www.omdbapi.com/?&apikey=${this.apiKey}&t=`;
  }

  getFilms(nameMovie: string) {
    return this.httpClient.get(`${this.URI}${nameMovie}`);
  }
}