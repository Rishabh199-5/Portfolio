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
        title:"Real Time Application",imgUrl:"assets/pics/ARR.svg",type:Constants.FILTER_TYPES.NODEJS
      },
      {
        title:"Admissions",imgUrl:"assets/pics/admissions.jpg",type:Constants.FILTER_TYPES.ANGULAR,
      },
      {
        title:"Ecommerce",imgUrl:"assets/pics/ecomm.png",type:Constants.FILTER_TYPES.ANGULAR,
      },
      {
        title:"Point Of Sale",imgUrl:"assets/pics/posjpg.jpg",type:Constants.FILTER_TYPES.ANGULAR,
      },{
        title:"Websites",imgUrl:"assets/pics/web.jpg",type:Constants.FILTER_TYPES.ANGULAR,

      }

    ]
  }

  activeFilter(index:number){
    this.selectedIndex=index;

  }

}
