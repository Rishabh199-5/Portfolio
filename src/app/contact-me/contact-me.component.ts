import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  contactText="Have a question";
  contactForm:FormGroup;

  constructor(
    private fb:FormBuilder
  ) { 
    this.contactForm=this.fb.group({
        name:['Name'],
        email:['Enter Email'],
        message:['Your Message']
      }
    )
  }
  
  ngOnInit() {
  }

}
