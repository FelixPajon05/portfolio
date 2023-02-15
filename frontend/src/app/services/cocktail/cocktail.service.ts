import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  URI: string;

  constructor(private httpClient: HttpClient) {
    this.URI = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
  }

  getCocktail(nameCocktail: string) {
    return this.httpClient.get(`${this.URI}${nameCocktail}`);
  }

}