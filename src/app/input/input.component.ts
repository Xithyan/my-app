import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <div class="input-group mb-3">
      <input type="text" class="form-control" [value]="value" (input)="onInputChange($event)">
      <button class="btn btn-outline-secondary" type="button" (click)="onRemove()">Submit</button>
    </div>
  `,
})
export class InputComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Output() remove = new EventEmitter<void>();

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }

  onRemove(): void {
    this.remove.emit();
  }
}
