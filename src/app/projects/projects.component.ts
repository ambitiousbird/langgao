import { Component, OnInit } from '@angular/core';
import * as projects from '../../data/projects.json';
import { Introduction } from '../../model/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  introduction: Introduction[];
  cards:any;
  topics:any;
  slides: any = [[]];

  ngOnInit() {
    this.introduction = projects.introduction;
    this.cards = projects.topics[0].projects;
    this.topics = projects.topics;
    this.slides = this.chunk(this.cards, 2);
  }

  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
}
