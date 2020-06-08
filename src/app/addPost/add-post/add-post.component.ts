import { Component, OnInit} from '@angular/core';
import { BlogServiceService} from 'src/Service/blog-service.service';
import { FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'blg-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup;
  showErrors: boolean;


  constructor(public formBuilder: FormBuilder, public postService: BlogServiceService) {}

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      Title: [''],
      Text: [''],
    });
  }

  add() {
    if (this.postForm.valid) {
      const formValue = this.postForm.getRawValue();
      console.log(formValue);
      this.postService.savePost(formValue)
        .then(success => console.log(success))
        .catch(failure => console.error(failure));
    } else {
      this.showErrors = true;
      console.log('Formularz zawiera błędy.');
    }
  }

}
