import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup

  constructor(private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      duration: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    })
  }

  ngOnInit(): void {
  }

  public get username() {
    return this.loginForm.get('username')
  }

  public get password() {
    return this.loginForm.get('password')
  }

  public get duration() {
    return this.loginForm.get('duration')
  }

  public submitForm(credentials) {
    this.loginService.login(credentials).subscribe(data => {
      this.router.navigate(['/home']);
    })
  }

}