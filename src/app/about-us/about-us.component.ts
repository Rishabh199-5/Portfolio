import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  aboutData:Array<{title:string,detail:string}>;
  constructor() { 
    this.aboutData=[];
  }
  
  ngOnInit() {
    this.aboutData=[
      {
        title:"Fast",
        detail:"Fast load times and lag free interaction, my highest priority.",
      },
      {
        title:"Fast",
        detail:"Fast load times and lag free interaction, my highest priority.",
      },
      {
        title:"Fast",
        detail:"Fast load times and lag free interaction, my highest priority.",
      },
      {
        title:"Fast",
        detail:"Fast load times and lag free interaction, my highest priority.",
      }
    ]
  }

}