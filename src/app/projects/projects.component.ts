import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

import * as projects from '../../data/projects.json';
import { Introduction } from '../../model/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  introduction: Introduction[];
  cards: any;
  topics: any;
  slides = [];
  mobileModeWidth = 767;
  resizeEvent: Observable<Event>;
  private ngUnsubscribe = new Subject();

  ngOnInit() {
    this.introduction = projects.introduction;
    this.cards = projects.topics[0].projects;
    this.topics = projects.topics;
    this.setSlides();

    fromEvent(window, 'resize')
      .pipe(
        debounceTime(500),
        takeUntil(this.ngUnsubscribe)
      ).subscribe(() => {
        this.setSlides();
      });
  }

  chunk(arr: any, chunkSize: any) {
    let currentSlides = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      currentSlides.push(arr.slice(i, i + chunkSize));
    }
    return currentSlides;
  }

  setSlides() {
    if (window.innerWidth <= this.mobileModeWidth) {
      this.slides = this.chunk(this.cards, 1);
    } else {
      this.slides = this.chunk(this.cards, 2);
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
