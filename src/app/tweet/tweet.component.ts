import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent  {

  @Input() likesCount: number;
  @Input() isActive: boolean;

  onClick() {
     this.likesCount += (this.isActive) ? -1 : 1 ;
     this.isActive = !this.isActive;
  }

}
