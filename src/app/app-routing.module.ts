import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './component/app-login/app-login.component';
import { HomeComponent } from './feature/home/home.component';
import { TestComponent } from './feature/test/test.component';


const routes: Routes = [
  { path: "",       component: AppLoginComponent},
  { path: '',       redirectTo: '/login',           pathMatch: 'full' },
  { path: 'login',  component: AppLoginComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'test',  component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
