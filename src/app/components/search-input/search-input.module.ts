import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SearchInputComponent } from "./search-input.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SearchInputComponent,
  ],
  exports: [
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
})
export class SearchInputModule {
}
