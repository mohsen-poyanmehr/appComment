import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IComment } from '../icomment';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeartBroken} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faHeart = faHeart;
  faHeartBroken = faHeartBroken;
  comments : IComment[] = [];
  @ViewChild('commentText' ,{static: false} ) comm : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  reviewsCount(c : IComment,n : HTMLInputElement){
    c.numberOfReviews++;
    c.star+=parseInt(n.value)
  }

  addComment(){
    let c:IComment={
      comment:this.comm.nativeElement.value,
      like:0,
      dislike:0,
      star:0,
      numberOfReviews:0
    }
    this.comments.push(c);
  }

  commentLike(c:IComment){
    c.like++;
  }

  commentDislike(c:IComment){
    c.dislike++;
  }

}
