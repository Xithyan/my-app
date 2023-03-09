import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should add an input when clicking on the "+" button', () => {
    const addButton = fixture.nativeElement.querySelector('button');
    addButton.click();
    expect(component.inputs.length).toEqual(1);
  });

  it('should set the input value correctly', () => {
    const inputElement = fixture.nativeElement.querySelector('input');
    const inputValue = 'test';
    inputElement.value = inputValue;
    inputElement.dispatchEvent(new Event('input'));
    expect(component.inputs[0]).toEqual(inputValue);
  });

  it('should submit the inputs when clicking on the "Submit" button', () => {
    spyOn(component.onSubmit, 'emit');
    component.inputs = ['input1', 'input2'];
    fixture.detectChanges();
    const submitButton = fixture.nativeElement.querySelectorAll('button')[1];
    submitButton.click();
    expect(component.onSubmit.emit).toHaveBeenCalledWith(component.inputs);
  });
});
