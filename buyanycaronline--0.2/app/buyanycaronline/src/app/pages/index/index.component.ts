import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { first } from 'rxjs/operators';
import {AuthenticationService} from "../../services/authentication.service";
import {ViewDataService} from "../../services/view-data.service";
import { HelloworldService } from '../../services/helloworld-service';

declare var $: any;

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  public flag: boolean = true;
  users = [];

  constructor(private dataService:ViewDataService, private router: Router, private authService: AuthenticationService, private helloworldService: HelloworldService) {}

  ngOnInit() {
    this.loadAllUsers();
    console.log(this.users);
    
  }

  onPlaceAd() {
    // if (!this.authService.isLoggedIn()) {
    //   this.dataService.changeMessage("Please login first to publish an ad");
    //   $("#loginPopup").modal("show");
    // } else {
    //   this.router.navigateByUrl("new-ad");
    // }
  }
  private loadAllUsers() {
    this.helloworldService.getHelloworld()
        .subscribe(users => this.users = users);
}
}
