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
  currentProjects:Array<{imageUrl:string,title:string,tech:string}>;
  constructor() { 
    this.filters=[];
    this.projects=[];
    this.currentProjects=[];
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
      }
    ]

    this.projects=[
      {
        title:"Real Time Application",imgUrl:"assets/pics/collab.png",type:Constants.FILTER_TYPES.JS,tech:"JS / ANGULAR"
      },
      {
        title:"Admissions",imgUrl:"assets/pics/admissions.jpg",type:Constants.FILTER_TYPES.ANGULAR,tech:"ANGULAR/HTML5/SASS"
      },
      {
        title:"Ecommerce",imgUrl:"assets/pics/ecomm.png",type:Constants.FILTER_TYPES.ANGULAR,tech:"ANGULAR/HTML5/SASS"
      },
      {
        title:"Point Of Sale",imgUrl:"assets/pics/posjpg.jpg",type:Constants.FILTER_TYPES.ANGULAR,tech:"ANGULAR/HTML5/CSS3"
      },{
        title:"Websites",imgUrl:"assets/pics/web.jpg",type:Constants.FILTER_TYPES.ANGULAR,tech:"ANGULAR/HTML5/CSS3"
      }
    ]
    this.currentProjects=JSON.parse(JSON.stringify(this.projects));
  }

  activeFilter(index:number){
    this.selectedIndex=index;
    if(this.filters[this.selectedIndex].type==Constants.FILTER_TYPES.ALL){
      this.currentProjects=JSON.parse(JSON.stringify(this.projects));
    }else{
      this.currentProjects=this.projects.filter(ele=>ele.type==this.filters[this.selectedIndex].type)
    }
  }

}
