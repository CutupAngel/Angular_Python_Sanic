import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./config/routes";
import { HeaderComponent } from "./header/header.component";
import { BoatDetailComponent } from "./pages/boat-detail/boat-detail.component";
import { BoatSearchComponent } from "./pages/boat-search/boat-search.component";
import { CarDetailComponent } from './pages/car-detail/car-detail.component';
import { CarSearchComponent } from './pages/car-search/car-search.component';
import { IndexComponent } from './pages/index/index.component';
import { ManageAdComponent } from './pages/manage-ad/manage-ad.component';
import { MonitorPageComponent } from './pages/monitor-page/monitor-page.component';
import { NewAdComponent } from './pages/new-ad/new-ad.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoatDetailComponent,
    BoatSearchComponent,
    CarDetailComponent,
    CarSearchComponent,
    IndexComponent,
    ManageAdComponent,
    MonitorPageComponent,
    NewAdComponent,
    UserProfileComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
