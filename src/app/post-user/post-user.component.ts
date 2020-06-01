import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})

export class PostUserComponent implements OnInit {

  model = {
    name: '',
  surname: '',
  age : ''};

  constructor(private httpClient: HttpClient) { }

  ngOnInit(){
  }

  onSubmit(){
  
    this.httpClient.post('http://localhost:8080/home/add',
    this.model).subscribe(data=>this.model)
  }

  onSubmit2(name: string,
    surname: string,
    age: string) {

      this.model.age = age
      this.model.surname = surname
      this.model.name = name

    this.httpClient.post('http://localhost:8080/home/add',this.model).subscribe(data=>this.model)
  }
}


