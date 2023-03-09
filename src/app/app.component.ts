import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSubmit(onSubmit: any, arg1: string) {
    throw new Error('Method not implemented.');
  }
  inputs: string[] = [''];

  addInput() {
    this.inputs.push('');
  }

  removeInput() {
    if (this.inputs.length > 1) {
      this.inputs.pop();
    }
  }

  printInputs() {
    console.log(this.inputs);
  }
}
