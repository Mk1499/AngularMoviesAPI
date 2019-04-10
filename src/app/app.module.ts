import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {AllMoviesService} from './all-movies.service';
import { MoviesDBComponent } from './movies-db/movies-db.component' ;
import {HttpClientModule} from '@angular/common/http' ;
import { Observable } from 'rxjs';
import { SearchMovieComponent } from './search-movie/search-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    SidebarComponent,
    MoviesDBComponent,
    SearchMovieComponent,
  ],
  imports: [
    BrowserModule ,
    FormsModule ,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AllMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
