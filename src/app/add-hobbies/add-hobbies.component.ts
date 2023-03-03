import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hobbies',
  templateUrl: './add-hobbies.component.html',
  styleUrls: ['./add-hobbies.component.scss']
})
export class AddHobbiesComponent implements OnInit {

  hobbiesDataArray: any = [];
  hobbyForm!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getDataFromState();
    this.createHobbyForm();
  }

  getDataFromState() {
    const state = JSON.parse(JSON.stringify(window.history.state));
    if (state.hobbiesData) {
      this.hobbiesDataArray = state?.hobbiesData;
      console.log("Hello Tanmay", this.hobbiesDataArray);
    } else {
      this.hobbiesDataArray = [];
    }
  }

  createHobbyForm() {
    this.hobbyForm = new FormGroup({
      myhobby: new FormControl(''),
    });
  }

  addHobbies() {
    if (this.hobbyForm.value.myhobby) {
      this.hobbiesDataArray.push(this.hobbyForm.value.myhobby);
      console.log("tanmay", this.hobbiesDataArray);
      this.hobbyForm.clearValidators();
    }
  }

  delete(value: any) {
    console.log("Hellooo", value);
    for (let i = 0; i <= this.hobbiesDataArray.length; i++) {
      if (value == this.hobbiesDataArray[i]) {
        this.hobbiesDataArray.splice(i, 1);
      }
    }
    console.log("result array after delete", this.hobbiesDataArray);
  }

  saveAndNavigateToDashboard() {
    sessionStorage.setItem('hobbiesArray', this.hobbiesDataArray);
    this.router.navigate(['/dashboard'], {
      state: {
        hobbiesData: this.hobbiesDataArray
      }
    })
  }

}
