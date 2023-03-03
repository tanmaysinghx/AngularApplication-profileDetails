import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHobbiesComponent } from './add-hobbies.component';

describe('AddHobbiesComponent', () => {
  let component: AddHobbiesComponent;
  let fixture: ComponentFixture<AddHobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHobbiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
