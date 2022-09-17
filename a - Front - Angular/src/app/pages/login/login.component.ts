import { Component, OnInit } from '@angular/core';

import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
 contactForm: FormGroup;
  
  error: string="";

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form= this.formBuilder.group(
      {
        password:['',[Validators.required, Validators.minLength(8)]],
        mail:['', [Validators.required, Validators.email]]
      }
    )
    this.contactForm = this.createFormGroup();

  }

  createFormGroup(){
    return new FormGroup({
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
        mail: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }


  get mail()
  {
    return this.form.get("mail");
  }

  get pass()
  {
    return this.form.get("password");
  }

  get passInvalid()
  {
    return this.pass?.touched && !this.pass.valid;
  }


  get mailNoValido()
  {
    return this.mail?.invalid;
  }




}
