import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { BlogServiceService } from 'src/Service/blog-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blg-only-post',
  templateUrl: './only-post.component.html',
  styleUrls: ['./only-post.component.scss']
})
export class OnlyPostComponent implements OnInit {

  post: Post = {
    title: 'brak',
    text: 'brak postu lub błąd serwera'
  };
  constructor( public postService: BlogServiceService, public activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const PostId = this.activatedRoute.snapshot.params.id;
    
    this.postService.fetchPost(PostId)
            .then((post: Post) => {
                console.log(post);
                this.post = post;
            })
            .catch(error => {
                console.log(error);
            });
    
  }

}
