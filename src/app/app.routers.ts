import { Route } from '@angular/router';
import { AddPostComponent } from './addPost/add-post/add-post.component';
import { HomeComponent } from './home/home.component';
import { OopsComponent } from './oops/oops/oops.component';

export const appRoutes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'dodajPost', component: AddPostComponent },
    { path: '**', component: OopsComponent }
];
