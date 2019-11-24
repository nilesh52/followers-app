import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'util';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(response => this.posts = response);

    // this.service.getAll()
    // .subscribe(response => {
    //   this.posts = response;
    // });
  }

  createPost(mytitle: HTMLInputElement) {
    const post = { id: 0, title: mytitle.value };
    this.posts.splice(0, 0, post);

    mytitle.value = '';
    this.service.create(post)
      .subscribe(
        newPost => {
          post.id = 101;
          console.log(post);
        },
        (errors: AppError) => {
          this.posts.splice(0, 1);

          if (errors instanceof BadInput) {
            alert('An Bad Input Error Occures !');
          } else {
            throw error;
          }
          // console.log(errors);
        });
  }

  updatePost(item) {
    console.log(item);
  }

  deletePost(item) {
    const index = this.posts.indexOf(item);
    this.posts.splice(index, 1);

    this.service.delete(item)
      .subscribe(
        () => {
          console.log('Deleted', item.id, item.title);
        },
        (errors: AppError) => {
          this.posts.splice(index, 0, item);

          if (errors instanceof NotFoundError) {
            alert('This post is already Deleted');
          } else { throw error; }
          console.log(errors);
        });
  }

}
