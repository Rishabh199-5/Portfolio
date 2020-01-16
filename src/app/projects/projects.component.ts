import { Component} from '@angular/core';
import { Constants } from 'src/common/constants';
import { stringify } from 'querystring';
@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  filters:Array<{name:string,type:number}>;
  selectedIndex=0;
  projects:Array<any>=[];
  currentProjects:Array<{imageUrl:string,title:string}>;
  constructor() { 
    this.filters=[];
    this.projects=[];
  }

  ngOnInit() {
    this.filters=[
      {
        name:"ALL",type:Constants.FILTER_TYPES.ALL
      },
      {
        name:"ANGULAR",type:Constants.FILTER_TYPES.ANGULAR
      },
      {
        name:"JAVASCRIPT",type:Constants.FILTER_TYPES.JS
      },
      {
        name:"NODEJS",type:Constants.FILTER_TYPES.NODEJS
      }
    ]

    this.projects=[
      {
        title:"Assignment Real Time Review",imgUrl:"assets/pics/ARR.svg",type:Constants.FILTER_TYPES.NODEJS
      }
    ]
  }

  activeFilter(index:number){
    this.selectedIndex=index;

  }

}
