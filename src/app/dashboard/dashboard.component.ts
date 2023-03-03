import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  fullname: any;
  age: any;
  country: any;
  gender: any;
  username: any;
  password: any;
  hobbiesData: any = ['Football', 'Tennis']

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getDataFromSessionStorage();
    this.getDataFromState();
  }

  getDataFromSessionStorage() {
    this.fullname = sessionStorage?.getItem('fullname');
    this.age = sessionStorage?.getItem('age');
    this.country = sessionStorage?.getItem('country');
    this.gender = sessionStorage?.getItem('gender');
    this.username = sessionStorage?.getItem('username');
    this.password = sessionStorage?.getItem('password');
  }

  getDataFromState() {
    const state = JSON.parse(JSON.stringify(window.history.state));
    if (state.hobbiesData) {
      this.hobbiesData = state?.hobbiesData;
    } 
  }

  updateDetails() {
    this.router.navigate(['/register'], {
      state: {
        editFlag: true,
        fullname: this.fullname,
        age: this.age,
        country: this.country,
        gender: this.gender,
        username: this.username,
        password: this.password
      }
    })
  }

  addHobbiesSection() {
    this.router.navigate(['/add-hobbies'], {
      state: {
        hobbiesData: this.hobbiesData
      }
    })
  }

}
