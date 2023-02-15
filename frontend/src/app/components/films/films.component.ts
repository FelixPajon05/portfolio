import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  movie: any;

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
  }

  getMovie(nameMovie: string) {
    this.filmsService.getFilms(nameMovie)
      .subscribe(
        res => {
          console.log(res);
          this.movie = res
        },
        err => console.log(err)
      )
  }

  postMovie(nameMovie: HTMLInputElement) {
    this.getMovie(nameMovie.value)

    nameMovie.value = '';
    nameMovie.focus();

    return false;
  }

}
