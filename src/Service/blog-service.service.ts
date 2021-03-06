import { Injectable } from '@angular/core';
import { Post } from 'src/app/model/post';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  url: string = 'http://localhost:3000/Posts';
  

  constructor( public httpService: HttpClient, ) { }
   
   savePost(post: Post) {
    return this.httpService.post(this.url, post).toPromise();
  }
  fetchPosts(query: string) {
    return this.httpService.get(`${this.url}?q=${query}`).toPromise();
  }
  fetchPost(postId){
    return this.httpService.get(`${this.url}/${postId}`).toPromise();
  }

  delete(post: Post){
    return this.httpService.delete(`${this.url}/${post.id}`).toPromise();

  }
}



