import { Component, OnInit, HostListener, Inject, ViewChild, TemplateRef } from '@angular/core';
import { ParticlesConfig } from './particles-config';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
declare let particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuOptions=[];
  eventSubscription;
  @ViewChild('home', {static: false}) homeRef;
  @ViewChild('menu', {static: false}) navRef;
  constructor(
    @Inject(DOCUMENT) private document: any
  ) {
    this.menuOptions=[
      "Home","About","Portfolio","Blog","Contact"
    ];
   }
  public ngOnInit(): void {
    this.invokeParticles();
    this.eventSubscription = fromEvent(window, "scroll").subscribe(e => {
      this.onWindowScroll(e);
  });
  }
  // public readonly windowScroll$ = fromEvent(window, 'scroll').pipe(map(x => window.scrollY), startWith(0), distinctUntilChanged(), shareReplay(1));

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

  onWindowScroll(event) {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop);
    let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if(pos > this.homeRef.nativeElement.offsetHeight)   {
    //Do your action here
    this.navRef.nativeElement.classList.add('fixed');
    this.navRef.nativeElement.classList.add('desk');
    console.log("end reached");
    }else{
      this.navRef.nativeElement.classList.remove('fixed');
      this.navRef.nativeElement.classList.remove('desk');
    }
  }
  
}
