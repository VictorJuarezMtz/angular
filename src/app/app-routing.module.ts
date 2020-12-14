import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { LayoutComponent} from './layout/layout.component';


const routes: Routes = [ 
{ path: 'login', component: LoginComponent},
{ path: 'layout', component: LayoutComponent},
{ path: 'form', component: FormComponent},
{ path: '**', pathMatch: 'full', redirectTo: '/'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
