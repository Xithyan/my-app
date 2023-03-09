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
  
  addInput(): void {
    this.inputs.push('');
  }
}
