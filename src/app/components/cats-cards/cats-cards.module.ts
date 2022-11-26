import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsCardsComponent } from "./cats-cards.component";
import { MatCardModule } from "@angular/material/card";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    CatsCardsComponent,
  ],
  exports: [
    CatsCardsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule,
  ],
})
export class CatsCardsModule {
}
