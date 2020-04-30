import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-layout',
  templateUrl: './register-layout.component.html',
  styleUrls: ['./register-layout.component.scss']
})
export class RegisterLayoutComponent implements OnInit {
  
  fields = [
    {
      name: 'Nombre',
      type: 'text',
      id: 'name'
    },
    {
      name: 'Apellido',
      type: 'text',
      id: 'last-name'
    },
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
    {
      name: 'Confirmación de Password',
      type: 'text',
      id: 'confirm-pass'
    }
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
