import { Component, OnInit } from '@angular/core';
import { formFields } from './constants';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {

  fields = formFields;

  constructor() { }

  ngOnInit(): void {
  }

}
