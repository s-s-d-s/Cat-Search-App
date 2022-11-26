import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from "./spinner.component";

@NgModule({
  declarations: [
    SpinnerComponent,
  ],
  exports: [
    SpinnerComponent,
  ],
  imports: [
    MatProgressSpinnerModule,
  ],
})
export class SpinnerModule {
}
