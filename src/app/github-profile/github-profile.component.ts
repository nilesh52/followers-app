import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activeRoute.paramMap
      .subscribe(params => {
        const id = +params.get('id'); // + sign use for convert string to number
        console.log(id);
      });
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: {page: 1, order: 'newest'}
    });
  }

}
