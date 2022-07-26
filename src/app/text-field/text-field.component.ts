import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { AmplifyInputDirective } from '../amplify-input.directive';

@Component({
  selector: 'amplify-text-field',
  templateUrl: './text-field.component.html',
})
export class TextFieldComponent implements AfterContentInit {
  @ContentChild(AmplifyInputDirective)
  childInput: AmplifyInputDirective;

  public inputId = '';

  constructor() {}

  ngAfterContentInit(): void {
    // getting data from child input
    this.inputId = this.childInput?.id;
    // send data to child input
    this.childInput.ariaDescribedBy = '123';
  }
}
