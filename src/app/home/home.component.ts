import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'blg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
 Posts: Array<Post> =[];


  constructor() { 
    this.Posts = [{
      id : 1,
      title : 'post Title',
      text: 'lorem ipsum'
    },
    {
      id : 2,
      title : 'post Title ',
      text: 'lorem ipsum '
        }
  ]
  }

  ngOnInit(): void {
  }

}
