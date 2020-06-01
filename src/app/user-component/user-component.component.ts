import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  users: any;
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:8080/home/users')
    .subscribe(data => this.users = data)
  }

}
