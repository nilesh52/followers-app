import { GithubFollowersService } from './../github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any;
  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    // this.route.queryParamMap.subscribe();

    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }

}
