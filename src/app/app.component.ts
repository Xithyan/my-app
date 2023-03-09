import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emit(emit: any) {
    throw new Error('Method not implemented.');
  }
  inputs: string[] = [''];

  constructor() {}

  ngOnInit() {}

  addInput() {
    this.inputs.push('');
  }
}
