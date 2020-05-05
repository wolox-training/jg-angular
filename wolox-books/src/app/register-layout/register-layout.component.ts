import { Component, OnInit } from '@angular/core';
import { formFields } from './constants';

@Component({
  selector: 'app-register-layout',
  templateUrl: './register-layout.component.html',
  styleUrls: ['./register-layout.component.scss']
})
export class RegisterLayoutComponent implements OnInit {

  fields = formFields;

  constructor() { }

  ngOnInit(): void {
  }

}
