import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm=this.formBuilder.group({
    email:['usuario@gmail.com'],
    password:[''],
  })
  constructor(private formBuilder: FormBuilder) { }

}
