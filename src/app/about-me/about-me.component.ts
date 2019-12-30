import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'rishabh',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  myskills:Array<{name:string,rate:string}>;
  @ViewChildren('fill')fillRef:Array<ElementRef>;
  constructor() { 
    this.myskills=[];
  }
  ngOnInit() {
    this.myskills=[
      {name:"CSS",rate:'80%'},
      {name:"SASS",rate:'80%'},
      {name:"HTML",rate:'85%'},
      {name:"JavaScript",rate:'70%'},
      {name:"Angular",rate:'80%'},
      {name:"Data Structures",rate:'70%'}
    ]

    console.log(this.fillRef);
    
  }

  ngAfterViewInit(){

    setTimeout(() => {
      if(this.fillRef){
        this.fillRef.forEach((ref,idx)=>{
          ref.nativeElement.style.maxWidth=this.myskills[idx].rate;
        })
      }
    }, 2000);
  }

}
