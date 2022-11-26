import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldInputComponent } from "./form-field-input.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    FormFieldInputComponent,
  ],
  exports: [
    FormFieldInputComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class FormFieldInputModule {
}
