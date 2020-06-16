import { Component} from '@angular/core';
import { BlogServiceService } from 'src/Service/blog-service.service';

@Component({
  selector: 'blg-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent  {

  query: string ;
  constructor(public postService: BlogServiceService) { }
}
