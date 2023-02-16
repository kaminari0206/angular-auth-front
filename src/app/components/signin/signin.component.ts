import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements AfterContentChecked {

  title = $localize`My page`;

  user!: { firstName: string; lastName: string; };
  welcome!: string;
  usernameLabel!: string;
  passwordLabel!: string;


  signinForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public translate: TranslateService,
    private _formBuilder: FormBuilder
  ) {
    this.signinForm = this.fb.group({
      email: [''],
      password: [''],
    });
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
  ngOnInit() {}
  ngAfterContentChecked() {
    this.removeElement();
  }
  loginUser() {
    this.authService.signIn(this.signinForm.value);
  }
  removeElement() {
    const slides = document.getElementsByClassName('mat-horizontal-stepper-header-container');

    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i] as HTMLElement;
      slide.style.display = "none";
    }
  }
  
  emailError1Show = false;
  emailError2Show = false;
  passwordErrorShow = false;
  locationErrorShow = false;
  emailChange(event: Observable<any>) {
    this.authService.validateEmail(event).subscribe((res) => {
      console.log(res)
      if (res.result == 'ok') {
        this.emailError1Show = false;
        this.emailError2Show = false;
        (<HTMLInputElement> document.getElementById("emailbutton")).disabled = false;
      } else {
        if (res.result = 'incorrect') {
          this.emailError1Show = true;
          this.emailError2Show = false;
          (<HTMLInputElement> document.getElementById("emailbutton")).disabled = true;
        } else {
          this.emailError2Show = true;
          this.emailError1Show = false;
          (<HTMLInputElement> document.getElementById("emailbutton")).disabled = true;
        }
      }
    });
  }
  passwordChange(event: Observable<any>) {
    console.log(event);
    this.authService.validatePassword(event).subscribe((res) => {
      console.log(res)
      if (res.result) {
        this.passwordErrorShow = false;
        (<HTMLInputElement> document.getElementById("passwordbutton")).disabled = false;
      } else {
        this.passwordErrorShow = true;
        (<HTMLInputElement> document.getElementById("passwordbutton")).disabled = true;
      }
    });
  }
  locationChange(event: Observable<any>) {
    console.log(event);
    this.authService.validateLocation(event).subscribe((res) => {
      console.log(res)
      if (res.result) {
        this.locationErrorShow = false;
        (<HTMLInputElement> document.getElementById("locationbutton")).disabled = false;
      } else {
        this.locationErrorShow = true;
        (<HTMLInputElement> document.getElementById("locationbutton")).disabled = true;
      }
    });
  }


  emailFormGroup = this._formBuilder.group({
    emailCtrl: ['', Validators.required],
  });
  passwordFormGroup = this._formBuilder.group({
    passwordCtrl: ['', Validators.required],
  });
  locationFormGroup = this._formBuilder.group({
    locationCtrl: ['', Validators.required],
  });

  verifyEmail(event:Event) {
    event.preventDefault();
  }
  
  isLinear = false;
}