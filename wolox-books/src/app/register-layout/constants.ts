import { FieldForm } from '../interfaces/field-form.interface';

export const formFields: FieldForm[] = [
  {
    name: 'Name',
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
    type: 'password',
    id: 'password'
  },
  {
    name: 'Confirmación de Password',
    type: 'text',
    id: 'confirm-pass'
  }
] 
