import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registrationData: any = {};
  loginData: any = {};

  constructor() { }

  setRegisterFormData(data: any) {
    this.registrationData = data;
    this.setDataInSessionStorage(this.registrationData);
  }

  getRegisterFormData() {
    return this.registrationData;
  }

  setLoginFormData(data: any) {
    this.loginData = data;
  }

  setDataInSessionStorage(data: any) {
    sessionStorage.setItem('fullname', data.name);
    sessionStorage.setItem('age', data.age);
    sessionStorage.setItem('gender', data.gender);
    sessionStorage.setItem('country', data.country);
    sessionStorage.setItem('fullname', data.name);
    sessionStorage.setItem('userName', data.userName);
    sessionStorage.setItem('password', data.password);
  }
}
