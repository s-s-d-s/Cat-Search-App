import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from "@angular/material/select";
import { CatApiService } from "@app/services/api/cat-api.service";
import { HomeComponent } from "./home.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { CatsBreedsResolver } from "@app/resolvers/cats-breeds.resolver";
import { SearchInputModule } from "../components/search-input/search-input.module";
import { FormFieldInputModule } from "../components/form-field-input/form-field-input.module";
import { CatsCardsModule } from "../components/cats-cards/cats-cards.module";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    SearchInputModule,
    FormFieldInputModule,
    CatsCardsModule,
  ],
  providers: [
    CatApiService,
    CatsBreedsResolver,
  ]
})
export class HomeModule {
}
