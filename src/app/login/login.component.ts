import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted!:boolean;
  hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(18)]),
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

}
