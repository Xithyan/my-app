import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  inputFields: any[] = [{ value: '' }];
  viewComponent: any;
value: any;
remove: any;
index: any;

  constructor() { }

  ngOnInit(): void {
  }

  addInputField() {
    this.inputFields.push({ value: '' });
  }

  submitValues() {
    const inputValues = this.inputFields.map(inputField => inputField.value);
    this.viewComponent.inputValues = inputValues;
    this.inputFields = [{ value: '' }];
  }
}
