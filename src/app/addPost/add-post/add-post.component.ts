import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'blg-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  newPost: string;
  PostList: Array<string>;
  add(){
    this.PostList.push(this.newPost);
    console.log(this.PostList);
    this.newPost = '';
  }



  constructor() {
  }

  ngOnInit(): void {
  }

}
