import { Component, OnInit} from '@angular/core';
import { BlogServiceService} from 'src/Service/blog-service.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'blg-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup;
  showErrors: boolean;
  isActive: boolean = false;
  postInfo: string;
  constructor(public formBuilder: FormBuilder, public postService: BlogServiceService) {}

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.minLength(2)],
      text: ['', Validators.minLength(10)],
    });
  }

  add() {
    if (this.postForm.valid) {
      const formValue = this.postForm.getRawValue();
      this.isActive = true;
      this.postService.savePost(formValue)
        .then(success => this.postInfo = 'Post został dodany do Servera.')
        .catch(failure => this.postInfo = 'Błąd Servera, Post nie został dodany.');
    } else {
      this.showErrors = true;
    }
  }
  close(){
    this.isActive = false;
    this.postForm = this.formBuilder.group({
      title: ['', Validators.minLength(2)],
      text: ['', Validators.minLength(10)],
    });

  }
}

