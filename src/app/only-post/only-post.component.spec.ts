import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyPostComponent } from './only-post.component';

describe('OnlyPostComponent', () => {
  let component: OnlyPostComponent;
  let fixture: ComponentFixture<OnlyPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
