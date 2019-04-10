import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-db',
  templateUrl: './movies-db.component.html',
  styleUrls: ['./movies-db.component.scss']
})
export class MoviesDBComponent implements OnInit {

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
    }
  ]

  constructor() {
    localStorage.setItem("Movies",JSON.stringify(this.movies)) ;

  }

  ngOnInit() {
  }

}
