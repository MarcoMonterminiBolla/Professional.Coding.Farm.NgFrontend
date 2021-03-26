import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppLoginComponent } from './component/app-login/app-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
    DxTextBoxModule,
    DxCheckBoxModule,
    DxButtonModule,    
    DxDropDownButtonModule} from 'devextreme-angular';
import { AppHeaderComponent } from './component/app-header/app-header.component';
import { ErrorResponseInterceptor } from './core/errorResponse.interceptor';
import { AuthorizationInterceptor } from './core/auth.interceptor';
import { HomeComponent } from './feature/home/home.component';
import { TestComponent } from './feature/test/test.component';
@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppHeaderComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    // Devextreme Import
    DxTextBoxModule,
    DxCheckBoxModule,
    DxDropDownButtonModule,
    DxButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorResponseInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

 // tslint:disable: triple-equals
 // tslint:disable: max-line-length
 // tslint:disable-next-line: only-arrow-functions
 // tslint:disable: one-variable-per-declaration
 // tslint:disable: no-string-literal
 // tslint:disable: only-arrow-functions
