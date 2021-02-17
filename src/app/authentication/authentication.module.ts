import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../authentication/login/login.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { ForgotPasswordComponent } from '../authentication/forgot-password/forgot-password.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

const routes: Routes = [
    { path:'login', component:LoginComponent},
    { path:'forgot-password', component:ForgotPasswordComponent},
    { path:'register', component:RegisterComponent},
    {path : '', redirectTo: 'login'}
]


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent
    ]
})
export class AuthenticatonModule { }
