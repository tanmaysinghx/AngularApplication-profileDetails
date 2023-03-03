import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

interface Countries {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted!: boolean;
  hide: boolean = true;
  genders: string[] = ['Male', 'Female'];
  selectedGender: any
  countries: Countries[] = [
    { value: 'India', viewValue: 'India' },
    { value: 'USA', viewValue: 'USA' },
    { value: 'Canada', viewValue: 'Canada' },
    { value: 'Australia', viewValue: 'Australia' },
  ];
  editFlag: boolean = false;
  fullnameVal: any;
  ageVal: any;
  countryVal: any;
  genderVal: any;
  usernameVal: any;
  passwordVal: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getDataFromState();
  }

  getDataFromState() {
    const state = JSON.parse(JSON.stringify(window.history.state));
    if (state.username) {
      this.editFlag = state?.editFlag;
      this.fullnameVal = state?.fullname;
      this.ageVal = state?.age;
      this.countryVal = state?.country;
      this.genderVal = state?.gender;
      this.usernameVal = state?.username;
      this.passwordVal = state?.password;
      this.patch();
    } else if (!state.username) {
      this.createRegisterForm();
    }
  }

  createRegisterForm() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      age: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      gender: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(18)]),
    });
  }

  patch() {
    this.registerForm = new FormGroup({
      name: new FormControl(this.fullnameVal, [Validators.required, Validators.maxLength(30)]),
      age: new FormControl(this.ageVal, [Validators.required, Validators.maxLength(2)]),
      gender: new FormControl(this.genderVal, [Validators.required]),
      country: new FormControl(this.countryVal, [Validators.required]),
      userName: new FormControl(this.usernameVal, [Validators.required, Validators.maxLength(20)]),
      password: new FormControl(this.passwordVal, [Validators.required, Validators.maxLength(18)]),
    });
  }

  navigateTologin() {
    this.router.navigate(['/']);
  }

  registerNow() {
    console.log("register form values", this.registerForm);
    this.authService.setRegisterFormData(this.registerForm.value);
    if (this.registerForm.status == 'VALID') {
      console.log("Form is valid");
      this.router.navigate(['/']);
    }
  }

  updateDetails() {
    this.authService.setRegisterFormData(this.registerForm.value);
    if (this.registerForm.status == 'VALID') {
      console.log("Form is valid");
      this.router.navigate(['/dashboard']);
    }
  }
 
}
