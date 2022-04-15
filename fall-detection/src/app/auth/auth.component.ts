import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  formLogin = this.formBuilder.group({
    email:"",
    password: ""
  });

  constructor(private router: Router,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  ToDashboard(){
    console.log(this.formLogin.value.email);
    this.router.navigate(['dashboard']);
  }

  // Submited(){
  //   this.router.navigate(['dashboard']);
  // }

}
