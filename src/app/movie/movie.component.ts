import { Component,Input, OnInit } from '@angular/core';
import { AllMoviesService } from '../all-movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() mov;
  // mov = JSON.parse(localStorage.getItem("CurrentMovie")) ;
  movies ;
  constructor(private _movies : AllMoviesService) {
    this.movies = _movies ;
  }
  ngOnInit() {
    // this.mov = this.movies.getMovies()[0];
    this.mov = {} ;
    this._movies.getMoviesFromAPI()
    .subscribe(data=> this.mov = data["Search"][0]) ;
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // console.log("Current Movie : " , this.mov);

  }

}
