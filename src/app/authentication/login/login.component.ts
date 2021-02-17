import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { LOGIN } from '../../shared/url'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  submitted = false;
  constructor(private formBuilder: FormBuilder, private apiService : ApiServicesService, private route : Router ) { }

  ngOnInit(): void {
    this.initializeData();
  }

  //Initialize the data
  initializeData() {
    this.buildForm()
  }

  //Building the form
  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(form) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.submitLogin(form);
  }

  submitLogin(form) {
    console.log(form);
    this.apiService.post(LOGIN,form.value).subscribe(res=>{
      console.log(res);
      localStorage.setItem('customerLogin',JSON.stringify(res))
      localStorage.setItem('customerToken',res.token);
      this.route.navigateByUrl('main/home')
    },err=>{
      console.log(err);
    })
  }

  navigateToSignup() {
    console.log(this.route.navigateByUrl('auth/register'));
  }
}