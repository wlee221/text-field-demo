import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { AmplifyInputDirective } from './amplify-input.directive';
import { AmplifyDescriptionTextDirective } from './amplify-description-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    TextFieldComponent,
    AmplifyInputDirective,
    AmplifyDescriptionTextDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
