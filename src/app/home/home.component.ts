import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { BlogServiceService } from 'src/Service/blog-service.service';

@Component({
  selector: 'blg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 postList ;
 query: string = '';

  constructor(public postService: BlogServiceService) { }

  ngOnInit(): void {
    this.updateList();
  }
  updateList() {
    this.postList = this.postService.fetchPost(this.query);
}

}
