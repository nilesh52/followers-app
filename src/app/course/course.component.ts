import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  isActive = false;
  email = 'abc@gmail.com';
  txtProcess: string;

  course = {
    title: 'The Complete Practise and i will complete it soon',
    rating: 4.9745,
    student: 30123,
    price : 190.95,
    releaseDate: new Date(2019, 3, 1),
    isFavorite: true
  };

  tweet = {
    body: 'This is the body',
    isLiked: true,
    likesCount: 10
  };

  viewMode = 'map';

  courseList = [
    {id: 1, name: 'course 1'},
    {id: 2, name: 'course 2'},
    {id: 3, name: 'course 3'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onSave($event) {
    console.log('Button Clicked', $event);
  }

  onKeyUp() {
      console.log('Enter was Pressed');
  }

  onTwoWayBinding() {
    console.log('Email :' + this.email);
  }

  onFavoriteChange(eventArge) {
    console.log('OnFavorite is Clicked :', eventArge);
  }

  onAddCourse() {
    this.courseList.push({id: 4, name: 'course 4'});
  }

  onRemoveCourse(course) {
    const index = this.courseList.indexOf(course);
    this.courseList.splice(index, 1);
  }

}
