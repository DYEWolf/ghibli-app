import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  movies: Array<string>;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getAllFilms().subscribe((res) => {
      const moviesName = res.map((movie) => movie.title);
      this.movies = moviesName;
    });
  }
}
