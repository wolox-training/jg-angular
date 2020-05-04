import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {

  fields = [
    {
      name: 'Email',
      type: 'text',
      id: 'email'
    },
    {
      name: 'Password',
      type: 'text',
      id: 'password'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
