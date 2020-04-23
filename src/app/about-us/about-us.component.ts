import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  aboutData:Array<{title:string,detail:string,icon:string}>;
  constructor() { 
    this.aboutData=[];
  }
  
  ngOnInit() {
    this.aboutData=[
      {
        title:"Fast",
        detail:"Fast load times and lag free interaction, my highest priority.",
        icon:"fa fa-clock-o"
      },
      {
        title:"Responsive",
        detail:"My layouts will work on any device, big or small.",
        icon:"fa fa-desktop"
      },
      {
        title:"Intuitive",
        detail:"Strong preference for easy to use, intuitive UX/UI.",
        icon:"fa fa-lightbulb-o"
      },
      {
        title:"Dynamic",
        detail:"Websites don't have to be static, I love making pages come to life.",
        icon:"fa fa-rocket"
      }
    ]
  }

}