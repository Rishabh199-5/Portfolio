import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
class BlogModel{
  imageUrl:string;
  title:string;
  date:string;
  content:string;
}
export class BlogComponent implements OnInit {

  blogList:Array<BlogModel>=[];
  constructor() {
    this.blogList=[
      {
        imageUrl:"",title:"",date:"",content:""
      }
    ]

   }

  ngOnInit() {
  }

}
