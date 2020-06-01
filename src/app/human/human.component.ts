import { Component, OnInit } from '@angular/core';
import { HumanClientService, user, userData } from '../services/human-client.service';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})

export class HumanComponent implements OnInit {

  humanModel: user;

  oneHuman: user;

  modelPost = {
    id : null,
    name: '',
  surname: '',
  age : ''};
  


  constructor(private humanService: HumanClientService) {
    //this.name = 'sampleName',
    //this.id = 1
   }

  ngOnInit() {
    this.humanService.getHumans().subscribe(data => this.humanModel = data)
  }

 // postText(value: string){
 //   this.name = value;
 // }

 // postId(value : number){
 //   this.id = value;
 // }

  postUser(name: string,
    surname: string,
    age: string){

    
    this.modelPost.name = name;
    this.modelPost.surname = surname;
    this.modelPost.age = age;
    this.modelPost.id = null;

    this.humanService.postHuman(this.modelPost).subscribe(data=> this.modelPost= data)
    
  }

  deleteUser(id: string){
    this.humanService.deleteHuman(id)
  }

  findUser(id2: string){
    this.humanService.findHuman2(id2).subscribe(data => this.oneHuman = data)
  }

}
