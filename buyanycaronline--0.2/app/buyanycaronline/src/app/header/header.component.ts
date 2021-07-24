import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import { User} from "../models/user";
declare var $: any;
import { environment} from "../../environments/environment.prod";
import {ViewDataService} from "../services/view-data.service";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  loginForm: FormGroup;
  registerForm: FormGroup;
  serverError: string;
  alertSuccess: string;


  constructor(private dataService:ViewDataService, private authServer: AuthenticationService, private formBuilder: FormBuilder, private router: Router) {
    this.currentUser = null;
    this.alertSuccess = "";
    this.serverError = "";
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
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username        : ['', [Validators.required, Validators.email]],
      hash        : ['', [Validators.required]]
    });
  }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      username        : ['', [Validators.required, Validators.email]],
      password        : ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword : ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });
  }

  onLoginSubmit() {
    if (this.loginForm.status === "VALID") {
      this.authServer.login(this.loginForm.value).then( () => {
        this.currentUser = this.authServer.getCurrentUser();
        $("#loginPopup").modal("hide");
        $("#loading").modal("hide");
      }).catch( err => {
        console.log('Error', err.error.message);
        this.dataService.changeMessage(err.error.message);
        this.loginForm.reset("VALID");
        $("#loading").modal("hide");
      });
      console.log('End Of Log in ', this.loginForm.status);
    }
  }

  onRegisterSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    $("#registerPopup").modal("hide");
      let user = {
        username: this.registerControls.username.value,
        hash: this.registerControls.password.value,
        type: 2
      };
      this.authServer.register(user).then(() =>{
        this.alertSuccess = " You have successfully registered your account, please proceed to login";
        $("#successMessage").show();
        $("#registerPopup").modal("hide");
        $("#loading").modal("hide");
      }).catch( err => {
        $("#registerPopup").modal("show");
        $("#loading").modal("hide");
        console.log('Error', err.error.message);
        this.serverError = err.error;
        alert("Error :" + this.serverError );
      });
  }
  get registerControls(): any {
    return this.registerForm.controls;
  }

  get loginControls(): any {
    return this.loginForm.controls;
  }

  logout() {
    this.currentUser = null;
    this.authServer.logout();
    window.location.replace(environment.apiBaseUrl);
  }

  resetMessage() {
    this.serverError = "";
  }

  ngOnInit() {
    this.createLoginForm();
    this.createRegisterForm();
    this.currentUser = this.authServer.getCurrentUser();
    console.log("STATUS LoginFORM", this.loginForm.status);
    this.dataService.currentMessage.subscribe(message => this.serverError = message);
  }

}
