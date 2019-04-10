import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  currentMovie ;
  moviesList ;

  recieveCurMovie($event){
    this.currentMovie = $event ;
  }

  searchResult($event){
    this.moviesList = $event ;
  }
}
