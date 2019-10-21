import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  faStar  =  faStar ;
  @Input() rating: number;
  width: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.width =this.rating *90 / 5; 
  }

}
