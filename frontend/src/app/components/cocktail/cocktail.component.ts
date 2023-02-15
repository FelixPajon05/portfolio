import { Component, OnInit } from '@angular/core';
import { CocktailService } from 'src/app/services/cocktail/cocktail.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {

  cocktail: any;

  constructor(private cocktailService: CocktailService) {

  }

  ngOnInit() {
  }

  getCocktail(nameCocktail: string) {
    this.cocktailService.getCocktail(nameCocktail)
      .subscribe(
        res => {
          console.log(res);
          this.cocktail = res
        },
        err => console.log(err)
      )
  }

  postCocktail(nameCocktail: HTMLInputElement) {
    this.getCocktail(nameCocktail.value)

    nameCocktail.value = '';
    nameCocktail.focus();

    return false;
  }

}
