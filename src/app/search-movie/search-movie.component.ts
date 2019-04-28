import { Component, OnInit ,  Output, EventEmitter } from '@angular/core';
import { AllMoviesService } from '../all-movies.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  public movName:string ;
  public movies : [] ;

  @Output() searchResult = new EventEmitter();



  constructor(private _movies:AllMoviesService) { }

  ngOnInit() {
  }

  public searchForMovie(formData: NgForm) {
    console.log("form data", formData.value.mName);
    this.movName = formData.value.mName ;

    this._movies.searchMovie(this.movName)
    .subscribe((data )=> {
      this.movies = data["Search"] ;
      this.searchResult.emit(this.movies) ;
      })



  }

}
