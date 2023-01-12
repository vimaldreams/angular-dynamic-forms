import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  dynamicForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({});
  }

  get f() {
    return this.dynamicForm.controls;
  }
  get t() {
    return this.f.tickets as FormArray;
  }

  onChangeTextboxes(e) {}

  onSubmit() {}
}
