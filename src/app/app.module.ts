import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogServiceService } from 'src/Service/blog-service.service';
import { HttpService } from 'src/Service/http.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './addPost/add-post/add-post.component';
import { OopsComponent } from './oops/oops/oops.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routers';
import { RemoveListComponent } from './remove list/remove-list/remove-list.component';
import {FormsModule} from '@angular/Forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPostComponent,
    OopsComponent,
    RemoveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [BlogServiceService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
