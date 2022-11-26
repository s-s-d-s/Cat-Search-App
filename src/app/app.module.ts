import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { BaseHttpService } from "@app/services/base-http.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { appInitializerFactory } from "@app/services/initializer.factory";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "@app/module/home.module";
import { SpinnerService } from "@app/services/spinner.service";
import { SpinnerModule } from "./components/spinner/spinner.module";
import { SpinnerInterceptor } from "./interceptors/spinner.interceptor";

const createTranslateLoader = (http: HttpClient): TranslateHttpLoader => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [
          HttpClient,
        ],
      },
    }),
    HomeModule,
    SpinnerModule,
  ],
  providers: [
    BaseHttpService,
    SpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
