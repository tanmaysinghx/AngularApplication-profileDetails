import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted!: boolean;
  hide: boolean = true;
  successfullLoginFlag: boolean = false;
  error: any;
  userNameValue: any;
  passwordValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.userNameValue = sessionStorage.getItem('userName');
    this.passwordValue = sessionStorage.getItem('password');
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

  loginNow() {
    this.authService.setLoginFormData(this.loginForm.value);
    let values = this.authService.getRegisterFormData();
      this.authenticateLoginUsingSessionStorage(this.loginForm.value);
    if (this.successfullLoginFlag) {
      this.router.navigate(['/dashboard']);
    } else if (!this.successfullLoginFlag) {
      this.error = "Login Failed"
    }
  }

  authenticateLoginUsingSessionStorage(userInputValues: any) {
    if (userInputValues.userName == this.userNameValue) {
      if (userInputValues.password == this.passwordValue) {
        console.log("succesfull authentication");
        this.successfullLoginFlag = true;
        sessionStorage.setItem('username', userInputValues.userName);
      }
      else if (userInputValues.password != this.passwordValue) {
        this.successfullLoginFlag = false;
      }
    } else if (userInputValues.userName != this.userNameValue) {
      this.successfullLoginFlag = false;
    }
  }
}

