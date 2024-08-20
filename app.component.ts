import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'garagy';
  constructor(private http: HttpClient) {}
  ngOnInit() {
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'localhost:4000',
      'x-rapidapi-key': 'your-api-key',
    });
    this.http
      .get<any>('http://localhost:4000', {
        headers: headers,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
