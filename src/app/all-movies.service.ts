import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {MovieInf} from './movieInf' ;
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllMoviesService {

  movieUrl;
  movies = [
    {
      name : "Kaabil" ,
      director:"Sanjay Gupta",
      writer: "Niranjan Iyengar",
      stars:["Hrithik Roshan","Yami Gautam","Ronit Roy"],
      rate: "7.0",
      imgSrc : "./assets/images/Kaabil.jpg"
    } ,
    {
      name : "Kal Ho Na Ho" ,
      director:"Sanjay Gupta",
      writer: "Sanjay Masoomm",
      stars:["Preity Zinta","Shah Rukh Khan","Saif Ali Khan"] ,
      rate: "8.0",
      imgSrc : "./assets/images/kalhonaho.jpg"
    } ,
    {
      name : "My Name is Khan" ,
      director:" Karan Johar",
      writer: " Shibani Bathija",
      stars:[" Shah Rukh Khan","Kajol","Sheetal Menon"] ,
      rate: "8.0",
      imgSrc : "./assets/images/khan.jpg"
    }
  ]

  constructor( private http : HttpClient) { }

  private _url = "http://www.omdbapi.com/?s=boys&apikey=3fdc596c" ;

  getMovies(){
    return this.movies ;
  }

  // Get All Movies From API
  getMoviesFromAPI():Observable<MovieInf[]> {
    return this.http.get<MovieInf[]>(this._url) ;
  }

  // Get Specific Movie Details from API
  getMovieDetails(movieId):Observable<any>{
    this.movieUrl = "http://www.omdbapi.com/" ;
    let param = new HttpParams().set("i",movieId).set("apikey","3fdc596c") ;
    console.log("URL: ", this.movieUrl);

    return this.http.get<any>(this.movieUrl , {params:param}) ;
  }

  searchMovie(name):Observable<any>{
    this.movieUrl = "http://www.omdbapi.com/" ;
    let param = new HttpParams().set("s",name).set("apikey","3fdc596c");
    return this.http.get<any>(this.movieUrl , {params:param}) ;

  }


}
