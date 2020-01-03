import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialLinks:Array<{icon:string,link:string}>;
  constructor() {
    this.socialLinks=[
      {icon:"fa fa-linkedin",link:"https://www.linkedin.com/in/rishabh-dangwal-706550103"},
      {icon:"fa fa-facebook-f",link:"https://facebook.com/rishabh.dangwal.94"},
      {icon:"fa fa-instagram",link:"https://www.instagram.com/rishabhdangwal/"}

    ];
   }
  ngOnInit() {

  }

}
