import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsBreedsResolver } from "@app/resolvers/cats-breeds.resolver";
import { HomeComponent } from "./module/home.component";
import { RoutingDefault } from "@app/constants/routing.constant";

const routes: Routes = [
  {
    path: RoutingDefault,
    component: HomeComponent,
    resolve: {
      breeds: CatsBreedsResolver,
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
