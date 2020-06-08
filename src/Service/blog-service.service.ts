import { Injectable } from '@angular/core';
import { Post } from 'src/app/model/post';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  url: string = 'http://localhost:3000/Posts';

  constructor( public httpService: HttpClient, ) { }
   
   savePost(post: Post) {
    return this.httpService.post(this.url, post).toPromise();
  }
  fetchPost(query: string) {
   
    return this.httpService.get(`${this.url}?q=${query}`).toPromise();
}
}



