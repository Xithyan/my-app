import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() submit = new EventEmitter<string>();
  @Input() index!: number;
  value: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
