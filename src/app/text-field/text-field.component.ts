import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { AmplifyInputDirective } from '../amplify-input.directive';

@Component({
  selector: 'amplify-text-field',
  templateUrl: './text-field.component.html',
})
export class TextFieldComponent implements AfterContentInit {
  @Input() describedBy: string;

  @ContentChild(AmplifyInputDirective)
  childInput: AmplifyInputDirective;

  public inputId = '';

  constructor() {}

  ngAfterContentInit(): void {
    // getting data from child input
    this.inputId = this.childInput?.id;
    // send data to child input
    // note: this is still not dynamic, so we still need a change detction strategy here.
    // this can be implemented later for the purpose of POC.
    this.childInput.ariaDescribedBy = this.describedBy;
  }
}
