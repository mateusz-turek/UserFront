import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  user1: any;
  user2: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
 //   this.httpClient.get('http://localhost:8080/home/user/1')
 //   .subscribe(data=> this.user1 = data)

 //   this.httpClient.get('http://localhost:8080/home/user/2')
 //   .subscribe(data=>this.user2 = data)
 // }
  }
}
