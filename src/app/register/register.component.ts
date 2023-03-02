import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  submitted!:boolean;
  hide: boolean = true;
  genders: string[] = ['Male', 'Female'];
  selectedGender: any
  countries: Countries[] = [
    {value: 'India', viewValue: 'India'},
    {value: 'USA', viewValue: 'USA'},
    {value: 'Canada', viewValue: 'Canada'},
    {value: 'Australia', viewValue: 'Australia'},
  ];;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
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

  navigateTologin() {
    this.router.navigate(['/']);
  }

  registerNow() {
    console.log("register form values", this.registerForm.value);
  }

}
