import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {
  countdown = 10;
  interval:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.interval = setInterval(()=>{
      this.countdown--;
      if(this.countdown<=0){
        this.router.navigate(['/']);
      }
    },1000);
  }

  ngOnDestroy(){
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
