import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {element} from "protractor";
import {User} from "../../models/user";
import {AuthenticationService} from "../../services/authentication.service";
declare var $: any;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  updateUsernameForm: FormGroup;
  updateHashForm: FormGroup;
  updateAddressForm: FormGroup;
  currentUser: User;
  ads: any;
  constructor(private authService:AuthenticationService, private formBuilder: FormBuilder, private router:Router) {
    this.currentUser = this.authService.getCurrentUser();
    this.ads = null;
    this.initUpdateUsername();
    this.initUpdateAddressForm();
    this.initUpdateHashForm();
  }

  ngOnInit() {

  }

  initUpdateUsername() {
    this.updateUsernameForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]]
    });
  }
  initUpdateHashForm() {
    this.updateHashForm = this.formBuilder.group({
      hash        : ['', [Validators.required, Validators.minLength(6)]],
      confirmHash : ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: this.MustMatch('hash', 'confirmHash')
    });
  }
  initUpdateAddressForm() {
    this.updateAddressForm = this.formBuilder.group({
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      mobile: ['', [Validators.required]]
    });
  }

  get updateUsernameControls():any {
    return this.updateUsernameForm.controls;
  }

  get updateHashControls(): any {
    return this.updateHashForm.controls;
  }

  get updateAddressControls(): any {
    return this.updateAddressForm.controls;
  }
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  revealView(event: any) {
    $(function() {
      var elements = event.target;
      elements = elements.parentNode.parentNode.childNodes;
      for (var i = 0; i < elements.length; i++) {
        if (elements[i].tagName === "BUTTON") {
          console.log("Is Button");
          $(elements[i]).removeClass("d-none");
          $(elements[i]).addClass("btn-block");
        }else {
          console.log("Is not Button");
          $(elements[i]).removeClass("d-none");
          $(elements[i]).addClass("d-block");
        }
        console.log("Element ,", elements[i]);
      }

    });
  }

  updateUser(form: FormGroup, index: number) {

  }

  cancel() {
    this.router.navigateByUrl("", { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl("user-profile");
    });
  }
}
