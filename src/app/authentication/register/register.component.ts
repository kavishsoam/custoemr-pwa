import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder, private route : Router) { }

  ngOnInit(): void {
    this.initializeData();
  }

  //Initialize the data
  initializeData() {
    this.buildForm()
  }

  //Building the form
  buildForm() {
    this.registerForm = this.formBuilder.group({
      firstname:['', [Validators.required]],
      lastname:['', [Validators.required]],
      mobile:['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword:['', [Validators.required]]
    })

  }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }
  
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }

    redirectLogin() {
      this.route.navigateByUrl('auth/login');
    }

}
