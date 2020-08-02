import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  moviesName: Array<string>;
  movies: any;
  data: any;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getAllFilms().subscribe((res) => {
      this.movies = res;
      this.data = res;
      const moviesName = res.map((movie) => movie.title);
      this.moviesName = moviesName;
    });
  }

  receiveFilter($event) {
    const filterString = $event;
    this.movies = this.data.filter((str) => {
      const movieTitle = str.title.toLowerCase();
      return movieTitle.includes(filterString.toLowerCase());
    });
  }
}
