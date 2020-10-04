import { Component, OnInit } from '@angular/core';
import * as about from '../../data/about.json'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  introduction:string;
  constructor() { }

  ngOnInit() {
    this.introduction = about.introduction;
  }

}
