import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName: any;
  usernameFlag: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userName = sessionStorage?.getItem('username') ?? "Null";
    console.log("hello username", this.userName);
    if (this.userName != "Null") {
      this.usernameFlag = true;
    } else if (this.userName == "Null") {
      this.usernameFlag = false;
    }
  }

  navigateToHome() {
    this.router.navigate(['/dashboard']);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

}
