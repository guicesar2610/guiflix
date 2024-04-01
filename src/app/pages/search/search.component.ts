import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm!: any;
  searchResult!: any;
  constructor(private service: MovieApiServiceService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      movieName: new FormControl(null),
    });
  }

  submitForm() {
    this.service
      .getSearchMovieApiData(this.searchForm.value)
      .subscribe((result) => {
        this.searchResult = result.results;
      });
  }
}
