import { AuthService } from './auth.service';
import { OrderService } from './order.service';
import { GithubFollowersService } from './github-followers.service';
import { DataService } from './service/data.service';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './post.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { MyServiceService } from './my-service.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { SummaryPipe } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { TweetComponent } from './tweet/tweet.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostComponent } from './post/post.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FavoriteComponent,
    SummaryPipe,
    TitleCasePipe,
    PanelComponent,
    TweetComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    ChangePasswordComponent,
    PostComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'followers/:id/:username', component: GithubProfileComponent},
      {path: 'followers', component: GithubFollowersComponent},
      {path: 'post', component: PostComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'login', component: LoginComponent},
      {path: 'no-access', component: NoAccessComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [
    MyServiceService,
    PostService,
    // DataService,
    GithubFollowersService,
    OrderService,
    AuthService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
