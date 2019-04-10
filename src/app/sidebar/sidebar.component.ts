import { Component, OnInit , Input , Output, EventEmitter } from '@angular/core';
import { AllMoviesService } from '../all-movies.service';
import { MovieInf } from '../movieInf';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() movies :MovieInf[] ;
  movie ;
  @Output() currentMovie = new EventEmitter();


  constructor(private _movies:AllMoviesService) {
  //  this.movies = JSON.parse(localStorage.getItem("Movies"))  ;
  // movies.getMoviesFromAPI()

  }
changeCurrent(movieId){
  // console.log("Movie ID : ",movieId);

  // localStorage.setItem("CurrentMovie",JSON.stringify(movie)) ;
  this._movies.getMovieDetails(movieId).subscribe((data)=> this.movie = data) ;
  this.currentMovie.emit(this.movie) ;
}


  ngOnInit() {
  //  this.movies = this._movies.getMovies() ;
    this._movies.getMoviesFromAPI()
    .subscribe(data => this.movies = data["Search"])


  }
   ngDoCheck(): void {
     //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
     //Add 'implements DoCheck' to the class.
     // console.log("Movies : ", this.movies);
   }
}
