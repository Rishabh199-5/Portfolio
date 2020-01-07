import { Component} from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  filters:Array<{name:string,children:Array<{title:string,subTitle:string,imgUrl:string}>}>;
  constructor() { 
    this.filters=[];
  }

  ngOnInit() {
    this.filters=[
      {
        name:"ALL",children:[
          
        ]
      },
      {
        name:"ANGULAR",children:[
          
        ]
      },
      {
        name:"JAVASCRIPT",children:[
          
        ]
      },
      {
        name:"NODEJS",children:[
          
        ]
      }
    ]
  }

}
