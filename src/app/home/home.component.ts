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

  constructor(public postService: BlogServiceService) {}

  ngOnInit(): void {
    this.updateList();
  }
  updateList() {
    this.postList = this.postService.fetchPosts(this.query);
}
search(query) {
  // 1. aktualizujemy wartosc `query` (wyszukiwana fraza)
  this.query = query;
  // 2. aktualizujemy liste kanapek (wykonujemy zapytanie do json-server)
  this.updateList();
}
del(post: Post){
  this.postService.delete(post);
  this.updateList();
}
}
