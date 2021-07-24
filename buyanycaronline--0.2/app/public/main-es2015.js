(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"main-wrapper\">\n\n  <!-- header -->\n  <app-header></app-header>\n  <!-- main content -->\n  <router-outlet></router-outlet>\n\n  <!-- Footer -->\n  <footer>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-sm-12\">\n          <div class=\"clearfix\">\n            <ul id=\"footer-links\">\n              <li><a href=\"\">Home</a> |\n              </li>\n              <li><a href=\"/car-search\"> Cars</a> |\n              </li>\n              <li><a href=\"/boat-search\"> Boats</a> |\n              </li>\n              <li><a href=\"#\"> About</a> |\n              </li>\n              <li><a href=\"#\"> Contact</a>\n              </li>\n            </ul>\n            <div id=\"footer-right\">Â© 2019 BUYANYCARONLINE</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n\n\n\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div id=\"header-main\">\n    <div class=\"container clearfix\">\n      <div id=\"header-left\">\n        <div class=\"clearfix\">\n          <!--Logo-->\n          <a class=\"header-logo\" href=\"/\">\n            <img src=\"/assets/img/logo.jpg\" alt=\"Logo\">\n          </a>\n        </div>\n      </div>\n      <div id=\"header-right\">\n        <div *ngIf=\"!currentUser\" id=\"header-authentication\">\n          <button type=\"button\" data-toggle=\"modal\" data-target=\"#loginPopup\">LOGIN</button>\n          <span>|</span>\n          <button type=\"button\" data-toggle=\"modal\" data-target=\"#registerPopup\">REGISTER</button>\n        </div>\n        <div *ngIf=\"currentUser\" id=\"header-authentication\">\n          <div class=\"dropdown\" id=\"nav-mainMenu-links\">\n            <button class=\"dropdown-toggle\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                    aria-expanded=\"false\">\n              {{currentUser.username}}\n            </button>\n            <div id=\"header-authentication\" *ngIf=\"currentUser.type == 'ADMIN'\">\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                <a class=\"dropdown-item\" href=\"monitor-page\">Ad Manage</a>\n                <a class=\"dropdown-item\" href=\"user-profile/{{currentUser.id}}\">User Profile</a>\n                <a class=\"dropdown-item\" (click)=\"logout()\">LOGOUT</a>\n              </div>\n            </div>\n            <div id=\"header-authentication\" *ngIf=\"currentUser.type == 'USER'\">\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                <a class=\"dropdown-item\" href=\"user-profile/{{currentUser.id}}\">User Profile</a>\n                <a class=\"dropdown-item\" (click)=\"logout()\">LOGOUT</a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div id=\"header-select\">\n          <div>\n            <a id=\"header-language\" href=\"#\" data-toggle=\"dropdown\" data-width=\"100%\">\n              <img src=\"/assets/img/lang-eng.png\">ENGLISH</a>\n            <ul class=\"dropdown-menu dropdown-menu-right\">\n              <li><a href=\"#\">Arabic</a></li>\n              <li><a href=\"#\">French</a></li>\n            </ul>\n          </div>\n          <!--<div>\n          <a id=\"header-currency\" href=\"#\" data-toggle=\"dropdown\" data-width=\"100%\">\n              <i class=\"fa fa-money\" style=\"margin-right: 3px;\"></i>AED</a>\n          <ul class=\"dropdown-menu dropdown-menu-right\">\n              <li><a href=\"#\">USD</a></li>\n              <li><a href=\"#\">INR</a></li>\n          </ul>\n          </div>-->\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <nav id=\"mainMenu\">\n    <div class=\"container\">\n      <div id=\"mainMenu-inner\">\n        <a href=\"javascript:void(0);\" id=\"mainMenu-icon\">\n          <i class=\"fa fa-bars\"></i>\n        </a>\n        <ul id=\"mainMenu-links\" class=\"clearfix\">\n          <li><a routerLink=\"/\" >Home</a>\n          </li>\n          <li><a routerLink=\"/car-search\" >Cars</a>\n          </li>\n          <li><a routerLink=\"/boat-search\" >Boats</a>\n          </li>\n          <li><a href=\"#\">About</a>\n          </li>\n          <li><a href=\"#\">Contact</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n\n\n<div class=\"modal fade\" id=\"loginPopup\">\n  <div class=\"modal-dialog\" style=\"max-width: 350px;\">\n    <div class=\"modal-content popup-form\">\n      <!-- Modal Header -->\n      <div class=\"modal-dialog-loader\" style=\"display:none;\"></div>\n      <div class=\"modal-header pf-header\">\n        <h4 class=\"pf-title\">Login</h4>\n        <button type=\"button\" class=\"close pf-close\" data-dismiss=\"modal\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-content\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginSubmit()\" method=\"post\">\n          <div class=\"form-group\">\n            <label class=\"pf-label\">Email</label>\n            <input type=\"email\" formControlName=\"username\" class=\"form-control pf-textInput\"\n                   [ngClass]=\"{ 'is-invalid': invalid && loginControls.username.errors }\"   placeholder=\"Enter your email\"/>\n            <div class=\"invalid-feedback\">\n              <div *ngIf=\"invalid && loginControls.username.errors\" class=\"invalid-feedback\">\n                 <div *ngIf=\"loginControls.username.errors.required\">User Name is required</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"pf-label\">Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control pf-textInput\"\n                   [ngClass]=\"{ 'is-invalid': invalid && loginControls.password.errors }\"  placeholder=\"Enter your password\"/>\n            <div class=\"invalid-feedback\">\n              <div *ngIf=\"invalid && loginControls.password.errors\" class=\"invalid-feedback\">\n               <div *ngIf=\"loginControls.password.errors.required\">Password is required</div>\n              </div>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"pf-submit\"> Login </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"registerPopup\">\n  <div class=\"modal-dialog\" style=\"max-width: 350px;\">\n    <div class=\"modal-content popup-form\">\n      <!-- Modal Header -->\n      <div class=\"modal-dialog-loader\" style=\"display:none;\"></div>\n      <div class=\"modal-header pf-header\">\n        <h4 class=\"pf-title\">Register</h4>\n        <button type=\"button\" class=\"close pf-close\" data-dismiss=\"modal\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-content\">\n        <form [formGroup]=\"registerForm\" method=\"post\">\n          <div class=\"form-group\">\n            <label class=\"pf-label\">User Name</label>\n            <input email type=\"text\" formControlName=\"username\" class=\"form-control pf-textInput\"\n                   placeholder=\"Enter your user name\"/>\n            <div *ngIf=\"registerControls.username.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"registerControls.username.errors.required\">User Name is required</div>\n              <div *ngIf=\"registerControls.username.errors.exist\">User name already used</div>\n              <div *ngIf=\"registerControls.username.errors.email\">Email is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"pf-label\">Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control pf-textInput\"\n                   placeholder=\"Enter your password\"/>\n            <div *ngIf=\"registerControls.password.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"registerControls.password.errors.required\">Password is required</div>\n              <div *ngIf=\"registerControls.password.errors.minlength\">Password must be at least 6 characters</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"pf-label\">Confirm Password</label>\n            <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control pf-textInput\"\n                   placeholder=\"Enter your confirm password\"/>\n            <div *ngIf=\"registerControls.confirmPassword.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"registerControls.confirmPassword.errors.required\">Confirm Password is required</div>\n              <div *ngIf=\"registerControls.confirmPassword.errors.minlength\">Password must be at least 6 characters\n              </div>\n              <div *ngIf=\"registerControls.confirmPassword.errors.mustMatch\">Passwords must match</div>\n            </div>\n          </div>\n          <input (click)=\"onRegisterSubmit()\" type=\"submit\" value=\"Register\" class=\"pf-submit\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/boat-detail/boat-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/boat-detail/boat-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content-wrapper\">\n  <div class=\"container\" id=\"vd-container\">\n    <div class=\"row\">\n      <div id=\"vdBox-container\">\n        <div id=\"vd-box\">\n          <div id=\"vdHeader\">\n            <div id=\"vdHeader-title\">{{boat.title}}</div>\n            <div><span>Price: </span>{{boat.price | currency}}</div>\n            <div><span>Created Date: </span>{{boat.create_at}}</div>\n            <div id=\"vdViewedHeader\">\n              <div><span>Viewed This: </span>{{boat.visitcount}}</div>\n            </div>\n          </div>\n\n          <div id=\"vd-preview\">\n            <div id=\"vd-previewImage\">\n              <i id=\"vd-previewImageLeft\" class=\"fa fa-caret-left\" aria-hidden=\"true\"></i>\n              <img *ngIf=\"previewImgFile\" [src]=\"previewImgFile\">\n              <i id=\"vd-previewImageFullScreen\" class=\"fa fa-arrows-alt\" aria-hidden=\"true\"></i>\n              <i id=\"vd-previewImageRight\" class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\n            </div>\n            <div id=\"vdPreviewItems\">\n              <div class=\"vdItem-image\" *ngFor=\"let imgFile of imgFiles\">\n                <img [src]=\"imgFile\">\n              </div>\n            </div>\n            <div id=\"vd-info\">\n              <div id=\"vdInfo-innerLeft\">\n                <div><span>Make: </span>{{boat.make}}</div>\n                <div><span>Model: </span>{{boat.model}}</div>\n                <div><span>Year:</span>{{boat.year}}</div>\n                <div><span>Price:</span>{{boat.price | currency}}</div>\n                <div><span>Transmission:</span>{{boat.transmission}}</div>\n                <div><span>FuelType:</span>{{boat.fueltype}}\n                </div>\n              </div>\n              <div id=\"vdInfo-innerRight\">\n                <div><span>Description: </span>\n                  {{boat.description}}\n                </div>\n                <div><span>Features: </span>\n                  <br>\n                  <ul *ngFor=\"let feature of features\">\n                    <li>{{feature}}</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"imagePopupContainer\">\n  <div style=\"padding-top: 40px;\">\n    <i id=\"closeImagePopupContainer\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n    <img *ngIf=\"previewImgFile\" id=\"popupImage\" [src]=\"previewImgFile\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/boat-search/boat-search.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/boat-search/boat-search.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content-wrapper\">\n  <div class=\"container\" id=\"sr-container\">\n    <div class=\"loader\" style=\"display: block;\"></div>\n    <div class=\"row\">\n      <div id=\"findBox-container\">\n        <div id=\"find-box\">\n          <h2>FIND</h2>\n          <form [formGroup]=\"findForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"col-md-12 col-sm-12\">\n              <div class=\"hf-label\">MAKE</div>\n              <div class=\"hf-select\">\n                <select formControlName=\"make\" class=\"selectpicker\" (change)=\"onMakeChange($event)\" title=\"SELECT NAME\"\n                  data-width=\"100%\">\n                  <option [value]=\"\"></option>\n                  <option *ngFor=\"let make of makes\" [value]=\"make.id\">{{make.value}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-12 col-sm-12\">\n              <div class=\"hf-label\">MODEL</div>\n              <div class=\"hf-select\">\n                <select formControlName=\"model\" class=\"selectpicker\" title=\"SELECT MODEL\" data-width=\"100%\">\n                  <option [value]=\"\"></option>\n                  <option *ngFor=\"let model of models\" [value]=\"model.id\">{{model.value}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-12 col-sm-12\">\n              <div class=\"hf-label\">YEAR</div>\n              <div class=\"hf-select half\">\n                <select formControlName=\"fromYear\" class=\"selectpicker\" title=\"FROM\" data-width=\"100%\">\n                  <option [value]=\"\"></option>\n                  <option [value]=\"year\" *ngFor=\"let year of fromYears\">{{year}}</option>\n                </select>\n              </div>\n              <div class=\"hf-select half\">\n                <select formControlName=\"toYear\" class=\"selectpicker\" title=\"TO\" data-width=\"100%\">\n                  <option [value]=\"\"></option>\n                  <option [value]=\"year\" *ngFor=\"let year of toYears\">{{year}}</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-md-12 col-sm-12\">\n              <div class=\"hf-label\">PRICE</div>\n              <div class=\"hf-select half\">\n                <select formControlName=\"fromPrice\" class=\"selectpicker\" title=\"FROM\" data-width=\"100%\">\n                  <option [value]=\"\"></option>\n                  <option [value]=\"price\" *ngFor=\"let price of fromPrices\">{{price}}</option>\n                </select>\n              </div>\n              <div class=\"hf-select half\">\n                <select formControlName=\"toPrice\" class=\"selectpicker\" title=\"TO\" data-width=\"100%\">\n                  <option [value]=\"\"></option>\n                  <option [value]=\"price\" *ngFor=\"let price of toPrices\">{{price}}</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-md-12 col-sm-12\">\n              <div class=\"hf-label\">ORDER</div>\n              <div class=\"hf-select\">\n                <select formControlName=\"orderid\" class=\"selectpicker\" title=\"SELECT ORDER\" data-width=\"100%\">\n                  <option value=\"HIGHEST_PRICE\">Highest Price</option>\n                  <option value=\"LOWEST_PRICE\">Lowest Price</option>\n                  <option value=\"NEWEST\">Newest</option>\n                  <option value=\"OLDEST\">Oldest</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-12 col-sm-12\">\n              <div class=\"hf-label\">LENGTH</div>\n              <div class=\"hf-select\">\n                <select formControlName=\"lengthID\" class=\"selectpicker\" title=\"SELECT LENGTH\" data-width=\"100%\">\n                  <option [value]=\"\"></option>\n                  <option *ngFor=\"let length of lengths\" [value]=\"length.id\">{{length.length}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-12 col-sm-12\">\n              <button type=\"submit\" class=\"button\" id=\"hf-button\">Search</button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div id=\"searchResultsBox-container\">\n        <div id=\"searchResults-box\">\n          <div class=\"search-body\">\n            <h2 class=\"col-md-7 search-title\">Search Results</h2>\n            <div class=\"col-md-5 price-select\">\n              <span class=\"col-md-5 sortby\">Sort By: </span>\n              <div class=\"col-md-7\">\n                <select class=\"orderPicker\" (change)=\"onChangeSorted($event)\" title=\"SELECT NAME\" data-margin=\"auto\"\n                  data-width=\"80%\">\n                  <option value=\"0\">Highest Price</option>\n                  <option value=\"1\">Lowest Price</option>\n                  <option value=\"2\">Newest</option>\n                  <option value=\"3\">Oldest</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"searchResults-item\" *ngFor=\"let boat of boats\">\n            <div class=\"searchResult-image\">\n              <img [src]=\"boat.imgFile\">\n            </div>\n            <div class=\"searchResult-info\">\n              <div>\n                <a (click)=\"getBoatDetailById(boat.id, boat.ad_id)\" class=\"searchResultInfo-title\"> {{boat.title}}</a>\n                <div class=\"searchResultInfo-price\"> {{boat.price|currency}}</div>\n              </div>\n              <div>\n                <div class=\"searchResult-info-inner1\">\n                  <div><span>Make:{{boat.make}}</span> </div>\n                  <div><span>Model:{{boat.model}}</span> </div>\n                  <div><span>Length:</span>{{boat.length}} </div>\n                </div>\n                <div class=\"searchResult-info-inner2\">\n                  <div><span>Fuel Type:</span>{{boat.fueltype}} </div>\n                  <div><span>Condition:</span>{{boat.condition}} </div>\n\n                </div>\n              </div>\n              <div class=\"searchResultInfo-date\"><span>Created Date:</span> {{boat.year}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"adBox-container\">\n        <div id=\"ad-box\">Empty block for ads</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/car-detail/car-detail.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/car-detail/car-detail.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content-wrapper\">\n  <div class=\"container\" id=\"vd-container\">\n    <div class=\"row\">\n      <div id=\"vdBox-container\">\n        <div id=\"vd-box\">\n          <div id=\"vdHeader\">\n            <div id=\"vdHeader-title\">{{car.title}}</div>\n            <div><span>Price: </span>{{car.price | currency}}</div>\n            <div><span>Created Date: </span>{{car.create_at}}</div>\n            <div id=\"vdViewedHeader\">\n              <div><span>Viewed This: </span>{{car.visitcount}}</div>\n            </div>\n          </div>\n\n          <div id=\"vd-preview\">\n            <div id=\"vd-previewImage\">\n              <i id=\"vd-previewImageLeft\" class=\"fa fa-caret-left\" aria-hidden=\"true\"></i>\n              <img *ngIf=\"previewImgFile\" [src]=\"previewImgFile\">\n              <i id=\"vd-previewImageFullScreen\" class=\"fa fa-arrows-alt\" aria-hidden=\"true\"></i>\n              <i id=\"vd-previewImageRight\" class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\n            </div>\n            <div id=\"vdPreviewItems\">\n              <div class=\"vdItem-image\" *ngFor=\"let imgFile of imgFiles\">\n                <img [src]=\"imgFile\">\n              </div>\n            </div>\n            <div id=\"vd-info\">\n              <div id=\"vdInfo-innerLeft\">\n                <div><span>Make: </span>{{car.make}}</div>\n                <div><span>Model: </span>{{car.model}}</div>\n                <div><span>Year:</span>{{car.year}}</div>\n                <div><span>Price:</span>{{car.price | currency}}</div>\n                <div><span>Transmission:</span>{{car.transmission}}</div>\n                <div><span>FuelType:</span>{{car.fueltype}}\n                </div>\n              </div>\n              <div id=\"vdInfo-innerRight\">\n                <div><span>Description: </span>\n                  {{car.description}}\n                </div>\n                <div><span>Features: </span>\n                  <br>\n                  <ul *ngFor=\"let feature of features\">\n                    <li>{{feature}}</li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"imagePopupContainer\">\n  <div style=\"padding-top: 40px;\">\n    <i id=\"closeImagePopupContainer\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n    <img *ngIf=\"previewImgFile\" id=\"popupImage\" [src]=\"previewImgFile\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/car-search/car-search.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/car-search/car-search.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content-wrapper\">\n  <div class=\"container\" id=\"sr-container\">\n    <div class=\"loader\" style=\"display:block;\"></div>\n    <div class=\"row\">\n      <div id=\"findBox-container\">\n        <div id=\"find-box\">\n          <h2>FIND</h2>\n          <form [formGroup]=\"findForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"col-md-12 col-sm-12\">\n              <div class=\"hf-label\">MAKE</div>\n              <div class=\"hf-select\">\n                <select formControlName=\"make\" class=\"selectpicker\" (change)=\"onMakeChange($event)\" title=\"SELECT NAME\"\n                  data-width=\"100%\">\n                  <option [value]=\"\"></option>\n                  <option *ngFor=\"let make of makes\" [value]=\"make.id\">{{make.value}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-12 col-sm-12\">\n              <div class=\"hf-label\">MODEL</div>\n              <div class=\"hf-select\">\n                <select formControlName=\"model\" class=\"selectpicker\" title=\"SELECT MODEL\" data-width=\"100%\">\n                  <option [value]=\"\"></option>\n                  <option *ngFor=\"let model of models\" [value]=\"model.id\">{{model.value}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-12 col-sm-12\">\n              <div class=\"hf-label\">YEAR</div>\n              <div class=\"hf-select half\">\n                <select formControlName=\"fromYear\" class=\"selectpicker\" title=\"FROM\" data-width=\"100%\">\n                  <option [value]=\"\"></option>\n                  <option [value]=\"year\" *ngFor=\"let year of fromYears\">{{year}}</option>\n                </select>\n              </div>\n              <div class=\"hf-select half\">\n                <select formControlName=\"toYear\" class=\"selectpicker\" title=\"TO\" data-width=\"100%\">\n                  <option [value]=\"\"></option>\n                  <option [value]=\"year\" *ngFor=\"let year of toYears\">{{year}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-12 col-sm-12\">\n              <div class=\"hf-label\">PRICE</div>\n              <div class=\"hf-select half\">\n                <select formControlName=\"fromPrice\" class=\"selectpicker\" title=\"FROM\" data-width=\"100%\">\n                  <option [value]=\"\"></option>\n                  <option [value]=\"price\" *ngFor=\"let price of fromPrices\">{{price}}</option>\n                </select>\n              </div>\n              <div class=\"hf-select half\">\n                <select formControlName=\"toPrice\" class=\"selectpicker\" title=\"TO\" data-width=\"100%\">\n                  <option [value]=\"\"></option>\n                  <option [value]=\"price\" *ngFor=\"let price of toPrices\">{{price}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-12 col-sm-12\">\n              <div class=\"hf-label\">ORDER</div>\n              <div class=\"hf-select\">\n                <select formControlName=\"orderid\" class=\"selectpicker\" title=\"SELECT ORDER\" data-width=\"100%\">\n                  <option value=\"HIGHEST_PRICE\">Highest Price</option>\n                  <option value=\"LOWEST_PRICE\">Lowest Price</option>\n                  <option value=\"NEWEST\">Newest</option>\n                  <option value=\"OLDEST\">Oldest</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-12 col-sm-12\">\n              <button type=\"submit\" class=\"button\" id=\"hf-button\">Search</button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div id=\"searchResultsBox-container\">\n        <div id=\"searchResults-box\">\n          <div style=\"border-bottom: 1px solid #2f3c40;\">\n            <h2>Search Results</h2>\n            <div id=\"sortby-container\">\n              <div id=\"sortby-label\">Sort by:</div>\n              <div id=\"sortby\">\n                <a id=\"sortby-selected\" href=\"#\" data-toggle=\"dropdown\" data-width=\"100%\">Highest Price</a>\n                <ul class=\"dropdown-menu dropdown-menu-right\">\n                  <li><a>Highest Price</a></li>\n                  <li><a>Lowest Price</a></li>\n                  <li><a>Newest</a></li>\n                  <li><a>Oldest</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"searchResults-item\" *ngFor=\"let car of cars\">\n            <div class=\"searchResult-image\">\n              <img [src]=\"car.imgFile\">\n            </div>\n            <div class=\"searchResult-info\">\n              <div>\n                <a (click)=\"getCarDetailById(car.id, car.ad_id)\" class=\"searchResultInfo-title\"> {{car.title}}</a>\n                <div class=\"searchResultInfo-price\"> {{car.price | currency}}</div>\n              </div>\n              <div>\n                <div class=\"searchResult-info-inner1\">\n                  <div><span>Make:</span> {{car.make}}</div>\n                  <div><span>Model:</span> {{car.model}}</div>\n                  <div><span>Transmission:</span> {{car.transmission}}</div>\n                </div>\n                <div class=\"searchResult-info-inner2\">\n                  <div><span>Fuel Type:</span> {{car.fueltype}}</div>\n                  <div><span>Condition:</span> {{car.condition}}</div>\n                </div>\n              </div>\n              <div class=\"searchResultInfo-date\"><span>Created Date:</span> {{car.year}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"adBox-container\">\n        <div id=\"ad-box\">Empty block for ads</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/index/index.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/index/index.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--main content-->\n<div id=\"home-main\">\n  <div class=\"container-fluid\" id=\"home-container\">\n    <div id=\"home-bg\">\n      <div id=\"home-bg-inner\">\n        <div id=\"home-form\" class=\"clearfix\" [ngClass]=\"flag ? 'clearfix':'clearfix open'\">\n          <!-- <a (click)=\"onPlaceAd()\" id=\"placeAd\"><i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i> Place Ad</a>-->\n          <a routerLink=\"/new-ad/1\" id=\"placeAd\"><i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i> Place Ad</a>\n          <div style=\"position: relative;\">\n\n            <h2>FIND VEHICLE</h2>\n            <form [formGroup]=\"findForm\" (ngSubmit)=\"onSubmit()\" mothod=\"post\" style=\"margin: 0;\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-12\">\n                  <div class=\"hf-label\" style=\"\">Motor</div>\n                  <div class=\"hf-select\">\n                    <select formControlName=\"motor\" class=\"selectpicker\" title=\"SELECT MOTOR\" data-width=\"100%\">\n                      <option *ngFor=\"let motor of motors\" [value]=\"motor.id\">{{motor.value}}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-md-4 col-sm-12\">\n                  <div class=\"hf-label\" style=\"\">MAKE</div>\n                  <div class=\"hf-select\">\n                    <select formControlName=\"make\" class=\"selectpicker\" (change)=\"onMakeChange($event)\"\n                      title=\"SELECT MAKE\" data-width=\"100%\">\n                      <option *ngFor=\"let make of makes\" [value]=\"make.id\">{{make.value}}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-md-4 col-sm-12\">\n                  <div class=\"hf-label\">MODEL</div>\n                  <div class=\"hf-select\">\n                    <select id=\"modelnew\" formControlName=\"model\" class=\"selectpicker\" title=\"SELECT MODEL\"\n                      data-width=\"100%\">\n                      <option *ngFor=\"let model of models\" [value]=\"model.id\">{{model.modelvalue}}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-md-4 col-sm-12 advancedf\">\n                  <div class=\"hf-label\">PRICE</div>\n                  <div class=\"hf-select half\">\n                    <select formControlName=\"fromPrice\" class=\"selectpicker\" title=\"FROM\" data-width=\"100%\">\n                      <option [value]=\"price\" *ngFor=\"let price of fromPrices\">{{price}}</option>\n                    </select>\n                  </div>\n                  <div class=\"hf-select half\">\n                    <select formControlName=\"toPrice\" class=\"selectpicker\" title=\"TO\" data-width=\"100%\">\n                      <option [value]=\"price\" *ngFor=\"let price of toPrices\">{{price}}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-md-4 col-sm-12 advancedf\">\n                  <div class=\"hf-label\">YEAR</div>\n                  <div class=\"hf-select half\">\n                    <select formControlName=\"fromYear\" class=\"selectpicker\" title=\"FROM\" data-width=\"100%\">\n                      <option [value]=\"year\" *ngFor=\"let year of fromYears\">{{year}}</option>\n                    </select>\n                  </div>\n                  <div class=\"hf-select half\">\n                    <select formControlName=\"toYear\" class=\"selectpicker\" title=\"TO\" data-width=\"100%\">\n                      <option [value]=\"year\" *ngFor=\"let year of toYears\">{{year}}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-md-4 col-sm-12 advancedf\">\n                  <div class=\"hf-label\">COLOR</div>\n                  <div class=\"hf-select\">\n                    <select formControlName=\"color\" class=\"selectpicker\" title=\"SELECT COLOR\" data-width=\"100%\">\n                      <option *ngFor=\"let color of colors\" [value]=\"color\">{{color}}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-md-4 col-sm-12 advancedf\">\n                  <div class=\"hf-label\">TRANSMISSION</div>\n                  <div class=\"hf-select\">\n                    <select formControlName=\"transmission\" class=\"selectpicker\" title=\"SELECT TRANSMISSION\"\n                      data-width=\"100%\">\n                      <option *ngFor=\"let transmission of transmissions\" [value]=\"transmission\">{{transmission}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-md-4 col-sm-12 advancedf\">\n                  <div class=\"hf-label\">FUEL TYPE</div>\n                  <div class=\"hf-select\">\n                    <select formControlName=\"fueltype\" class=\"selectpicker\" title=\"SELECT FUELTYPE\" data-width=\"100%\">\n                      <option *ngFor=\"let fueltype of fueltypes\" [value]=\"fueltype\">{{fueltype}}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-md-4 col-sm-12 advancedf\">\n                  <div class=\"hf-label\">CONDITION\n                  </div>\n                  <div class=\"hf-select\">\n                    <select formControlName=\"condition\" class=\"selectpicker\" title=\"SELECT CONDITION\" data-width=\"100%\">\n                      <option *ngFor=\"let condition of conditions\" [value]=\"condition\">{{condition}}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-md-12 col-sm-12\">\n                  <a href=\"javascript:void(0);\" (click)=\"flag =! flag\" id=\"home-advanced\">ADVANCED SEARCH <i\n                      class=\"fa fa-angle-double-down\" aria-hidden=\"true\"></i></a>\n                  <button type=\"submit\" class=\"button\" id=\"hf-button\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    Search</button>\n                </div>\n              </div>\n            </form>\n          </div>\n\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manage-ad/manage-ad.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manage-ad/manage-ad.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--main content-->\n<div class=\"main-content-wrapper\">\n  <div class=\"container\" id=\"map-container\">\n    <div class=\"row\">\n      <div id=\"adInfoBox-container\">\n        <div id=\"adInfo-box\">\n          <input id=\"ad_id\" type=\"hidden\" value=\"{{car.ad_id}}\" />\n          <input id=\"vehicle_id\" type=\"hidden\" value=\"{{car.vehicle_id}}\" />\n          <input id=\"car_id\" type=\"hidden\" value=\"{{car.id}}\" />\n          <div>\n            <div>\n              <span>Title: </span><a>{{car.title}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"d-none\">\n              <input id=\"title\" class=\"ba-input\" type=\"text\" placeholder=\"{{car.title}}\">\n              <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n          <div>\n            <div>\n              <span>Price: </span><a>{{car.price | currency}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n\n            </div>\n            <div class=\"d-none\">\n              <input id=\"price\" class=\"ba-input\" pattern=\"^\\$\\d{1,3}(,\\d{3})*(\\.\\d+)?$\" type=\"currency\"\n                placeholder=\"{{car.price}}\">\n              <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n          <div>\n            <div>\n              <span>Description: </span><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i><a\n                class=\"a-ads-description\">{{car.description}}</a>\n            </div>\n            <div class=\"d-none\">\n              <textarea id=\"description\" cols=\"30\" rows=\"10\" aria-invalid=\"false\" placeholder=\"{{car.description}}\"\n                class=\"ba-input\"></textarea>\n              <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n          <div class=\"hf-label\">Vehicle Details</div>\n          <div>\n            <div>\n              <input id=\"make\" type=\"hidden\" value=\"{{car.make_id}}\" />\n              <span>Make: </span><a>{{car.make}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"d-none\">\n              <select id=\"make_id\" class=\"ba-select\" title=\"SELECT MAKE\" (change)=\"onMakeChange($event)\"\n                data-width=\"100%\">\n                <option *ngFor=\"let make of makes\" [value]=\"make.id\">{{make.value}}</option>\n              </select>\n              <i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n          <div>\n            <div>\n              <input id=\"model\" type=\"hidden\" value=\"{{car.model_id}}\" />\n              <span>Model: </span><a>{{car.model}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"d-none\">\n              <select id=\"model_id\" class=\"ba-select\" title=\"SELECT MODEL\" data-width=\"100%\">\n                <option *ngFor=\"let model of models\" [value]=\"model.id\">{{model.modelvalue}}</option>\n              </select>\n              <i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n          <div>\n            <div>\n              <span>Year: </span><a>{{car.year}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"d-none\">\n              <select id=\"year\" class=\"ba-select\" title=\"SELECT YEAR\" data-width=\"100%\">\n                <option *ngFor=\"let year of years\" [value]=\"year\">{{year}}</option>\n              </select>\n              <i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n          <div>\n            <div>\n              <span>Fuel Type: </span><a>{{car.fueltype}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"d-none\">\n              <select id=\"fueltype\" class=\"ba-select\" title=\"SELECT TRANSMISSION\" data-width=\"100%\">\n                <option *ngFor=\"let fueltype of fueltypes\" [value]=\"fueltype\">{{fueltype}}</option>\n              </select>\n              <i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i> </div>\n          </div>\n          <div>\n            <div>\n              <span>Condition: </span><a>{{car.condition}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"d-none\">\n              <select id=\"condition\" class=\"ba-select\" title=\"SELECT CONDITION\" data-width=\"100%\">\n                <option *ngFor=\"let condition of conditions\" [value]=\"condition\">{{condition}}</option>\n              </select>\n              <i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n          <div>\n            <div>\n              <span>Transmission: </span><a>{{car.transmission}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"d-none\">\n              <select id=\"transmission\" class=\"ba-select\" title=\"SELECT TRANSMISSION\" data-width=\"100%\">\n                <option *ngFor=\"let transmission of transmissions\" [value]=\"transmission\">{{transmission}}</option>\n              </select>\n              <i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n          <div>\n            <div>\n              <span>Color: </span><a>{{car.color}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"d-none\">\n              <select id=\"color\" class=\"ba-select\" title=\"SELECT COLOR\" data-width=\"100%\">\n                <option *ngFor=\"let color of colors\" [value]=\"color\">{{color}}</option>\n              </select>\n              <i class=\"fa fa-check d-none\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"PhotoBox-container\">\n        <div id=\"Photo-box\">\n          <div style=\"border-bottom: 1px solid #2f3c40;\">\n            <h2>Photos</h2>\n          </div>\n          <div id=\"PhotoBoxItem-container\">\n            <div class=\"left-exist-photo\" *ngFor=\"let imgFile of imgFiles\">\n              <div class=\"lefted-close-btn\">\n                <img class=\"close-icon\" src=\"../../../assets/img/Close.png\" (click)=\"onDeleteSubmit(imgFile)\" />\n              </div>\n              <img src=\"{{imgFile}}\" class=\"left-preview-img\" (click)=\"changePreview(imgFile)\">\n            </div>\n            <!-- <div class=\"PhotoBox-item\" *ngFor = \"let imgFile of imgFiles\">\n\t\t\t\t\t\t\t<div class=\"PhotoBox-image\">\n\t\t\t\t\t\t\t\t<img [src]=\"imgFile\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button class=\"PhotoBox-delete\" (click) = \"onDeleteSubmit(imgFile)\" [attr.data-index]=\"i\">Delete</button>\n\t\t\t\t\t\t</div> -->\n          </div>\n          <div id=\"PhotoBox-preview\">\n            <img *ngIf=\"previewImgFile\" src=\"{{previewImgFile}}\">\n          </div>\n        </div>\n        <div id=\"publishButton-container\">\n          <div *ngIf=\"!car.pubish\">\n            <button id=\"publishButton\" (click)=\"onPublishSubmit()\">Publish</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/monitor-page/monitor-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/monitor-page/monitor-page.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--main content-->\n<div class=\"main-content-wrapper\">\n  <div class=\"container\" id=\"ma-container\">\n    <div class=\"row\">\n      <div id=\"adListBox-container\">\n        <div id=\"adList-box\">\n          <div class=\"adList-item\" *ngFor=\"let ad of ads\">\n            <div class=\"adList-info\">\n              <div><span style='cursor:pointer;' (click)=\"getCarByAdId(ad.id)\">Ad Number: </span>222</div>\n              <div><span>Title: </span>{{ad.title}}</div>\n              <div><span>Price: </span>{{ad.price | currency}}</div>\n              <div><span>Created Date: </span>{{ad.create_at}}</div>\n            </div>\n            <div class=\"adList-buttons\">\n              <button (click)=\"approveAd(ad)\">Approve</button>\n              <button>Reject</button>\n              <button (click)=\"deleteAd(ad)\"><i class=\"fa fa-trash\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"adSelectedBox-container\">\n        <div id=\"adSelectedSearch-box\">Search:\n          <input type=\"text\" placeholder=\"Ad Number..\">\n          <button><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n        </div>\n        <div id=\"adSelected-box\">\n          <div id=\"adSelected-number\"><span>Ad Number: </span></div>\n          <div id=\"adSelected-info\">\n            <div class=\"hf-label\">Vehicle Details</div>\n            <div><span>Make: </span> {{car.make}}</div>\n            <div><span>Model: </span> {{car.model}}</div>\n            <div><span>Year:</span> {{car.year}}</div>\n            <div><span>Price:</span> {{car.price | currency}}</div>\n            <div><span>Transmission:</span> {{car.transmission}}</div>\n            <div><span>Fuel:</span> {{car.fueltype}}\n            </div>\n            <div><span>Description: </span>\n              <br>{{car.description}}\n            </div>\n            <div><span>Features: </span>\n              <br>\n              <ul *ngFor=\"let feature of features\">\n                <li>{{feature}}</li>\n              </ul>\n            </div>\n          </div>\n          <div id=\"adSelected-preview\">\n            <div id=\"adSelected-previewImage\">\n              <i class=\"fa fa-caret-left\" aria-hidden=\"true\" style=\"left:5px;\" id='vd-previewImageLeft'></i>\n              <img *ngIf=\"previewImgFile\" [src]=\"previewImgFile\">\n              <i class=\"fa fa-caret-right\" aria-hidden=\"true\" style=\"right: 5px;\" id='vd-previewImageRight'></i>\n            </div>\n            <div id=\"adSelectedPreviewItems\">\n              <div class=\"adSelectedItem-image\" *ngFor=\"let imgFile of imgFiles\">\n                <img [src]=\"imgFile\" />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/new-ad/new-ad.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/new-ad/new-ad.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--main content-->\n<div class=\"main-content-wrapper\">\n  <div class=\"container\" id=\"nap-container\">\n    <div class=\"loader\" style=\"display:none;\"></div>\n    <div class=\"row\">\n      <form [formGroup]=\"newForm\" id=\"newForm\" method=\"post\">\n        <div id=\"vehicleDetailsBox-container\">\n          <div id=\"vehicleDetails-box\">\n            <div class=\"row\">\n              <div class=\"col-md-12 col-sm-12\">\n                <h2>Ad Details</h2>\n              </div>\n              <div class=\"col-md-12 col-sm-12\">\n                <div class=\"hf-label\" style=\"\">TITLE</div>\n                <input formControlName=\"title\" class=\"form-control ad-input\" type=\"text\"\n                  [ngClass]=\"{ 'is-invalid': submitted && fNew.title.errors }\" placeholder=\"Enter title\" />\n                <div *ngIf=\"submitted && fNew.title.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"fNew.title.errors.required\">Title is required</div>\n                </div>\n              </div>\n              <div class=\"col-md-12 col-sm-12\">\n                <div class=\"hf-label\" style=\"\">PRICE</div>\n                <input formControlName=\"price\" class=\"form-control ad-input\" type=\"number\"\n                  [ngClass]=\"{ 'is-invalid': submitted && fNew.price.errors }\" placeholder=\"Enter price\" />\n                <div *ngIf=\"submitted && fNew.price.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"fNew.price.errors.min\">Price is only required positive number</div>\n                  <div *ngIf=\"fNew.price.errors.required\">Price is required </div>\n                </div>\n              </div>\n              <div class=\"col-md-12 col-sm-12\">\n                <div class=\"hf-label\" style=\"\">DESCRIPTION</div>\n                <textarea formControlName=\"description\" class=\"form-control ad-textarea\" cols=\"30\" rows=\"10\"\n                  aria-invalid=\"false\" [ngClass]=\"{ 'is-invalid': submitted && fNew.description.errors }\"\n                  placeholder=\"Enter description\" id=\"description\"></textarea>\n                <div *ngIf=\"submitted && fNew.description.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"fNew.description.errors.required\">Description is required</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id=\"vehicleDetailsBox2-container\">\n          <div id=\"vehicleDetails-box\">\n            <div class=\"row\">\n              <div class=\"col-md-12 col-sm-12\">\n                <h2>Vehicle Details</h2>\n              </div>\n              <div class=\"col-md-12 col-sm-12\">\n                <div class=\"hf-label\" style=\"\">MAKE</div>\n                <div class=\"hf-select\">\n                  <select formControlName=\"make_id\" class=\"form-control selectpicker\"\n                    [ngClass]=\"{ 'is-invalid': submitted && fNew.make_id.errors }\" (change)=\"onMakeChange($event)\"\n                    title=\"SELECT NAME\" data-width=\"100%\">\n                    <option *ngFor=\"let make of makes\" [value]=\"make.id\">{{make.value}}</option>\n                  </select>\n                  <div *ngIf=\"submitted && fNew.make_id.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fNew.make_id.errors.required\">Make is required</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-12 col-sm-12\">\n                <div class=\"hf-label\">MODEL</div>\n                <div class=\"hf-select\">\n                  <select formControlName=\"model_id\" class=\"form-control selectpicker\"\n                    [ngClass]=\"{ 'is-invalid': submitted && fNew.model_id.errors }\" title=\"SELECT MODEL\"\n                    data-width=\"100%\">\n                    <option *ngFor=\"let model of models\" [value]=\"model.id\">{{model.modelvalue}}</option>\n                  </select>\n                  <div *ngIf=\"submitted && fNew.model_id.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fNew.model_id.errors.required\">Model is required</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-12 col-sm-12\">\n                <div class=\"hf-label\">YEAR</div>\n                <div class=\"hf-select\">\n                  <select formControlName=\"year\" class=\"form-control selectpicker\"\n                    [ngClass]=\"{ 'is-invalid': submitted && fNew.year.errors }\" title=\"SELECT YEAR\" data-width=\"100%\">\n                    <option *ngFor=\"let year of years\" [value]=\"year\">{{year}}</option>\n                  </select>\n                  <div *ngIf=\"submitted && fNew.year.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fNew.year.errors.required\">Year is required</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-12 col-sm-12\">\n                <div class=\"hf-label\">FUEL TYPE</div>\n                <div class=\"hf-select\">\n                  <select formControlName=\"fueltype\" class=\"form-control selectpicker\"\n                    [ngClass]=\"{ 'is-invalid': submitted && fNew.fueltype.errors }\" title=\"SELECT FUELTYPE\"\n                    data-width=\"100%\">\n                    <option *ngFor=\"let fueltype of fueltypes\" [value]=\"fueltype\">{{fueltype}}</option>\n                  </select>\n                  <div *ngIf=\"submitted && fNew.fueltype.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fNew.fueltype.errors.required\">Fueltype is required</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-12 col-sm-12\">\n                <div class=\"hf-label\">CONDITION\n                </div>\n                <div class=\"hf-select\">\n                  <select formControlName=\"condition\" class=\"form-control selectpicker\"\n                    [ngClass]=\"{ 'is-invalid': submitted && fNew.condition.errors }\" title=\"SELECT CONDITION\"\n                    data-width=\"100%\">\n                    <option *ngFor=\"let condition of conditions\" [value]=\"condition\">{{condition}}</option>\n                  </select>\n                  <div *ngIf=\"submitted && fNew.condition.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fNew.condition.errors.required\">Condition is required</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-12 col-sm-12\">\n                <div class=\"hf-label\">TYPE\n                </div>\n                <div class=\"hf-select\">\n                  <select class=\"form-control selectpicker \" title=\"SELECT TYPE\" data-width=\"100%\"\n                    (change)=\"changeTypes($event)\">\n                    <option *ngFor=\"let type of types\" [value]=\"type.value\">{{type.value}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-md-12 col-sm-12\" [hidden]=\"inputType!='BOAT'\">\n                <div class=\"hf-label\">LENGTH</div>\n                <div class=\"hf-select\">\n                  <select formControlName=\"length\" class=\"form-control selectpicker\"\n                    [ngClass]=\"{ 'is-invalid': submitted && fNew.length.errors }\" title=\"SELECT LENGTH\"\n                    data-width=\"100%\">\n                    <option *ngFor=\"let length of lengths\" [value]=\"length.id\">{{length.length}}</option>\n                  </select>\n                  <div *ngIf=\"submitted && fNew.length.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fNew.length.errors.required&&inputType=='BOAT'\">Length is required</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-12 col-sm-12\" [hidden]=\"inputType!='CAR'\">\n                <div class=\"hf-label\">TRANSMISSION</div>\n                <div class=\"hf-select\">\n                  <select formControlName=\"transmission\" class=\"form-control selectpicker\"\n                    [ngClass]=\"{ 'is-invalid': submitted && fNew.transmission.errors }\" title=\"SELECT TRANSMISSION\"\n                    data-width=\"100%\">\n                    <option *ngFor=\"let transmission of transmissions\" [value]=\"transmission\">{{transmission}}</option>\n                  </select>\n                  <div *ngIf=\"submitted && fNew.transmission.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fNew.transmission.errors.required&&inputType=='CAR'\">Transmission is required</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-12 col-sm-12\" [hidden]=\"inputType!='CAR'\">\n                <div class=\"hf-label\">COLOR</div>\n                <div class=\"hf-select\">\n                  <select formControlName=\"color\" class=\"form-control selectpicker\"\n                    [ngClass]=\"{ 'is-invalid': submitted && fNew.color.errors }\" title=\"SELECT COLOR\" data-width=\"100%\">\n                    <option *ngFor=\"let color of colors\" [value]=\"color\">{{color}}</option>\n                  </select>\n                  <div *ngIf=\"submitted && fNew.color.errors&&inputType=='CAR'\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fNew.color.errors.required&&inputType=='CAR'\">Color is required</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-md-12 col-sm-12\" [hidden]=\"inputType!='CAR'\">\n                <div class=\"hf-label\">Features</div>\n                <label class=\"hf-checkbox\" *ngFor=\"let feature of features\">\n                  <input type=\"checkbox\" [value]=\"feature\">{{feature}}\n                </label>\n              </div>\n              <div class=\"col-md-12 col-sm-12\">\n                <button type=\"submit\" class=\"button\" id=\"hf-button\">Save</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n      <div id=\"uploadPhotoBox-container\" style=\"display:block;\">\n        <div id=\"uploadPhoto-box\" style=\"display:block;\">\n          <div style=\"border-bottom: 1px solid #2f3c40;\">\n            <h2>Upload Photos</h2>\n          </div>\n          <!-- <div id=\"uploadPhotoBoxItem-container\">\n\t\t\t\t\t\t<div class=\"uploadPhotoBox-item\" *ngFor = \"let imgFile of imgFiles;\">\n\t\t\t\t\t\t\t<div class=\"uploadPhotoBox-image\">\n\t\t\t\t\t\t\t\t<img [src]=\"imgFile\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button class=\"uploadPhotoBox-delete\" (click) = \"onDeleteSubmit(imgFile)\" [attr.data-index]=\"i\">Delete</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> -->\n          <div class=\"photo-array\">\n            <div class=\"add-Photo\">\n              <form [formGroup]=\"uploadForm\">\n                <input type=\"file\" name=\"carimg\" (change)=\"onFileChange($event)\" />\n                <button class=\"add-Photo-btn\"></button>\n              </form>\n            </div>\n            <!-- id=\"uploadPhotoBox-preview\" -->\n            <div class=\"exist-photo\" *ngFor=\"let item of img_arr\">\n              <div class=\"close-btn\">\n                <img src=\"../../../assets/img/Close.png\" (click)=\"closeImage(item)\" />\n              </div>\n              <img src=\"{{item.base64}}\" class=\"preview-img\">\n            </div>\n          </div>\n\n        </div>\n        <div id=\"publishButton-container\">\n          <button class=\"col-md-4 uploadPhotoBox-uploadButton pt-2\" [hidden]=\"currentUser.type!='ADMIN'\"\n            (click)=\"onPublishSubmit()\">Publish</button>\n          <button class=\"col-md-4 uploadPhotoBox-uploadButton pt-2\" [hidden]=\"currentUser.type!='USER'\"\n            (click)=\"onPublishSubmit()\">User's Button</button>\n          <button class=\"col-md-4 uploadPhotoBox-uploadButton pt-2\" (click)=\"onUploadSubmit()\">Upload</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-profile/user-profile.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-profile/user-profile.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--main content-->\n<div class=\"main-content-wrapper\">\n  <div class=\"container\" id=\"up-container\">\n    <div class=\"row\">\n      <form [formGroup]=\"accountForm\" method=\"post\">\n        <div id=\"AccSettingsBox-container\">\n          <div id=\"AccSettings-box\">\n            <h2>Account Settings</h2>\n            <div style=\"margin-top: 20px;\">\n              <input id=\"userid\" type=\"hidden\" value=\"{{user.id}}\" />\n              <div class=\"form-group\">\n                <div>\n                  <span>Name: </span><a>{{user.username}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"d-none\">\n                  <input email type=\"text\" id=\"username\" formControlName=\"username\" class=\"form-control ba-input\"\n                    [ngClass]=\"{ 'is-invalid': submitted && fAccount.username.errors }\"\n                    placeholder=\"Enter email address\" />\n                  <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                  <div *ngIf=\"submitted && fAccount.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fAccount.username.errors.exist\">User name already used</div>\n                    <div *ngIf=\"fAccount.username.errors.email\">Email is required</div>\n                  </div>\n                </div>\n              </div>\n\n              <div>\n                <div>\n                  <span>Password: </span><a>**********</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"d-none\">\n                  <input id=\"password\" formControlName=\"password\" class=\"form-control ba-input\" type=\"password\"\n                    [ngClass]=\"{ 'is-invalid': submitted && fAccount.password.errors }\" placeholder=\"Enter password\">\n                  <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                  <div *ngIf=\"submitted && fAccount.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fAccount.password.errors.required\">Password is required</div>\n                    <div *ngIf=\"fAccount.password.errors.minlength\">Password must be at least 6 characters</div>\n                  </div>\n                </div>\n              </div>\n\n              <div>\n                <div id=\"confimrPasswordDiv\" class=\"d-none\">\n                  <input id=\"confirmPassword\" formControlName=\"confirmPassword\" class=\"form-control ba-input\"\n                    type=\"password\" [ngClass]=\"{ 'is-invalid': submitted && fAccount.confirmPassword.errors }\"\n                    placeholder=\"Enter confirm password\">\n                  <div *ngIf=\"submitted && fAccount.confirmPassword.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"fAccount.confirmPassword.errors.required\">Confirm Password is required</div>\n                    <div *ngIf=\"fAccount.confirmPassword.errors.minlength\">Password must be at least 6 characters</div>\n                    <div *ngIf=\"fAccount.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"hf-label\">ADDRESS</div>\n              <div>\n                <div>\n                  <span>Country: </span><a>{{user.country}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"d-none\">\n                  <input id=\"country\" class=\"ba-input\" type=\"text\" placeholder=\"Enter country\">\n                  <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                </div>\n              </div>\n\n              <div>\n                <div>\n                  <span>City: </span><a>{{user.city}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"d-none\">\n                  <input id=\"city\" class=\"ba-input\" type=\"text\" placeholder=\"Enter city\">\n                  <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                </div>\n              </div>\n\n              <div>\n                <div>\n                  <span>Street: </span><a>{{user.address}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"d-none\">\n                  <input id=\"address\" class=\"ba-input\" type=\"text\" placeholder=\"Enter street\">\n                  <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                </div>\n              </div>\n\n              <div class=\"hf-label\">Contact details</div>\n\n              <div>\n                <div>\n                  <span>Mobile: </span><a>{{user.mobile}}</a><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"d-none\">\n                  <input id=\"mobile\" class=\"ba-input\" type=\"text\" placeholder=\"Enter mobile number\">\n                  <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                </div>\n              </div>\n            </div>\n            <!--<div style=\"text-align:center;\">\n                        <button type=\"submit\" class=\"button\" id=\"hf-button\">Save</button>\n                    </div>-->\n          </div>\n        </div>\n      </form>\n      <div id=\"manageAdsBox-container\">\n        <div id=\"manageAds-box\">\n          <h2>Manage Ads</h2>\n          <div class=\"manageAdsItem\" *ngFor=\"let ad of ads\">\n            <div class=\"manageAdsItem-left\">\n              <div><span>Title: </span>{{ad.title}}</div>\n              <div><span>Price: </span>{{ad.price | currency}}</div>\n              <div class=\"description\"><span>Description: </span>\n                <div class=\"ads-description\">{{ad.description}}</div>\n              </div>\n            </div>\n            <div class=\"manageAdsItem-right\">\n              <a href=\"/manage-ad/{{ad.id}}\">\n                <button>Modify</button>\n              </a>\n              <button>Mark as sold</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"NewAdBox-container\">\n        <div id=\"NewAd-box\">\n          <h2>New Ad?</h2>\n          <a href=\"/new-ad/{{user.id}}\">\n            <button type=\"submit\" class=\"button\">\n              <i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i> Click here</button>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "buyanycaronline";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/routes */ "./src/app/config/routes.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _pages_boat_detail_boat_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/boat-detail/boat-detail.component */ "./src/app/pages/boat-detail/boat-detail.component.ts");
/* harmony import */ var _pages_boat_search_boat_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/boat-search/boat-search.component */ "./src/app/pages/boat-search/boat-search.component.ts");
/* harmony import */ var _pages_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/car-detail/car-detail.component */ "./src/app/pages/car-detail/car-detail.component.ts");
/* harmony import */ var _pages_car_search_car_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/car-search/car-search.component */ "./src/app/pages/car-search/car-search.component.ts");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _pages_manage_ad_manage_ad_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/manage-ad/manage-ad.component */ "./src/app/pages/manage-ad/manage-ad.component.ts");
/* harmony import */ var _pages_monitor_page_monitor_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/monitor-page/monitor-page.component */ "./src/app/pages/monitor-page/monitor-page.component.ts");
/* harmony import */ var _pages_new_ad_new_ad_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/new-ad/new-ad.component */ "./src/app/pages/new-ad/new-ad.component.ts");
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/user-profile/user-profile.component */ "./src/app/pages/user-profile/user-profile.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _pages_boat_detail_boat_detail_component__WEBPACK_IMPORTED_MODULE_9__["BoatDetailComponent"],
            _pages_boat_search_boat_search_component__WEBPACK_IMPORTED_MODULE_10__["BoatSearchComponent"],
            _pages_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_11__["CarDetailComponent"],
            _pages_car_search_car_search_component__WEBPACK_IMPORTED_MODULE_12__["CarSearchComponent"],
            _pages_index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"],
            _pages_manage_ad_manage_ad_component__WEBPACK_IMPORTED_MODULE_14__["ManageAdComponent"],
            _pages_monitor_page_monitor_page_component__WEBPACK_IMPORTED_MODULE_15__["MonitorPageComponent"],
            _pages_new_ad_new_ad_component__WEBPACK_IMPORTED_MODULE_16__["NewAdComponent"],
            _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_17__["UserProfileComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _config_routes__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/config/routes.ts":
/*!**********************************!*\
  !*** ./src/app/config/routes.ts ***!
  \**********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/user-profile/user-profile.component */ "./src/app/pages/user-profile/user-profile.component.ts");
/* harmony import */ var _pages_new_ad_new_ad_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/new-ad/new-ad.component */ "./src/app/pages/new-ad/new-ad.component.ts");
/* harmony import */ var _pages_manage_ad_manage_ad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/manage-ad/manage-ad.component */ "./src/app/pages/manage-ad/manage-ad.component.ts");
/* harmony import */ var _pages_car_search_car_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/car-search/car-search.component */ "./src/app/pages/car-search/car-search.component.ts");
/* harmony import */ var _pages_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/car-detail/car-detail.component */ "./src/app/pages/car-detail/car-detail.component.ts");
/* harmony import */ var _pages_monitor_page_monitor_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/monitor-page/monitor-page.component */ "./src/app/pages/monitor-page/monitor-page.component.ts");
/* harmony import */ var _pages_boat_search_boat_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/boat-search/boat-search.component */ "./src/app/pages/boat-search/boat-search.component.ts");
/* harmony import */ var _pages_boat_detail_boat_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/boat-detail/boat-detail.component */ "./src/app/pages/boat-detail/boat-detail.component.ts");












const routes = [
    { path: "", component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: "user-profile/:user_id", component: _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"] },
    { path: "new-ad/:user_id", component: _pages_new_ad_new_ad_component__WEBPACK_IMPORTED_MODULE_5__["NewAdComponent"] },
    { path: "manage-ad/:ad_id", component: _pages_manage_ad_manage_ad_component__WEBPACK_IMPORTED_MODULE_6__["ManageAdComponent"] },
    { path: "monitor-page", component: _pages_monitor_page_monitor_page_component__WEBPACK_IMPORTED_MODULE_9__["MonitorPageComponent"] },
    { path: "car-search", component: _pages_car_search_car_search_component__WEBPACK_IMPORTED_MODULE_7__["CarSearchComponent"] },
    { path: "car-detail", component: _pages_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_8__["CarDetailComponent"] },
    { path: "boat-search", component: _pages_boat_search_boat_search_component__WEBPACK_IMPORTED_MODULE_10__["BoatSearchComponent"] },
    { path: "boat-detail", component: _pages_boat_detail_boat_detail_component__WEBPACK_IMPORTED_MODULE_11__["BoatDetailComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/config/storage.ts":
/*!***********************************!*\
  !*** ./src/app/config/storage.ts ***!
  \***********************************/
/*! exports provided: BROWSER_STORAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_STORAGE", function() { return BROWSER_STORAGE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const BROWSER_STORAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Browser Storage', {
    providedIn: 'root',
    factory: () => localStorage
});


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(authServer, formBuilder) {
        this.authServer = authServer;
        this.formBuilder = formBuilder;
        this.currentUser = null;
        this.invalid = false;
        this.createLoginForm();
        this.createRegisterForm();
    }
    MustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    createLoginForm() {
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    createRegisterForm() {
        this.registerForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        }, {
            validator: this.MustMatch('password', 'confirmPassword')
        });
    }
    onLoginSubmit() {
        if (this.loginForm.invalid) {
            this.invalid = true;
            console.log('Invalid', this.invalid);
            return;
        }
        this.authServer.login(this.loginForm.value).then(() => {
            this.currentUser = this.authServer.getCurrentUser();
        }).catch(err => {
            console.log('Error', err);
        });
    }
    onRegisterSubmit() {
    }
    get registerControls() {
        return this.registerForm.controls;
    }
    get loginControls() {
        return this.loginForm.controls;
    }
    logout() {
        this.currentUser = null;
        this.authServer.logout();
    }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/pages/boat-detail/boat-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/boat-detail/boat-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JvYXQtZGV0YWlsL2JvYXQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/boat-detail/boat-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/boat-detail/boat-detail.component.ts ***!
  \************************************************************/
/*! exports provided: BoatDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoatDetailComponent", function() { return BoatDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BoatDetailComponent = class BoatDetailComponent {
    constructor() { }
    ngOnInit() { }
};
BoatDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-boat-detail",
        template: __webpack_require__(/*! raw-loader!./boat-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/boat-detail/boat-detail.component.html"),
        styles: [__webpack_require__(/*! ./boat-detail.component.css */ "./src/app/pages/boat-detail/boat-detail.component.css")]
    })
], BoatDetailComponent);



/***/ }),

/***/ "./src/app/pages/boat-search/boat-search.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/boat-search/boat-search.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JvYXQtc2VhcmNoL2JvYXQtc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/boat-search/boat-search.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/boat-search/boat-search.component.ts ***!
  \************************************************************/
/*! exports provided: BoatSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoatSearchComponent", function() { return BoatSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BoatSearchComponent = class BoatSearchComponent {
    constructor() { }
    ngOnInit() {
    }
};
BoatSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-boat-search',
        template: __webpack_require__(/*! raw-loader!./boat-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/boat-search/boat-search.component.html"),
        styles: [__webpack_require__(/*! ./boat-search.component.css */ "./src/app/pages/boat-search/boat-search.component.css")]
    })
], BoatSearchComponent);



/***/ }),

/***/ "./src/app/pages/car-detail/car-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/car-detail/car-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nhci1kZXRhaWwvY2FyLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/car-detail/car-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/car-detail/car-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: CarDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailComponent", function() { return CarDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarDetailComponent = class CarDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car-detail',
        template: __webpack_require__(/*! raw-loader!./car-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/car-detail/car-detail.component.html"),
        styles: [__webpack_require__(/*! ./car-detail.component.css */ "./src/app/pages/car-detail/car-detail.component.css")]
    })
], CarDetailComponent);



/***/ }),

/***/ "./src/app/pages/car-search/car-search.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/car-search/car-search.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nhci1zZWFyY2gvY2FyLXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/car-search/car-search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/car-search/car-search.component.ts ***!
  \**********************************************************/
/*! exports provided: CarSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarSearchComponent", function() { return CarSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarSearchComponent = class CarSearchComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car-search',
        template: __webpack_require__(/*! raw-loader!./car-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/car-search/car-search.component.html"),
        styles: [__webpack_require__(/*! ./car-search.component.css */ "./src/app/pages/car-search/car-search.component.css")]
    })
], CarSearchComponent);



/***/ }),

/***/ "./src/app/pages/index/index.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/index/index.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let IndexComponent = class IndexComponent {
    constructor(router) {
        this.router = router;
        this.flag = true;
    }
    ngOnInit() { }
};
IndexComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-index",
        template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/index/index.component.html"),
        styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/pages/index/index.component.css")]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/pages/manage-ad/manage-ad.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/manage-ad/manage-ad.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZS1hZC9tYW5hZ2UtYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/manage-ad/manage-ad.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/manage-ad/manage-ad.component.ts ***!
  \********************************************************/
/*! exports provided: ManageAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAdComponent", function() { return ManageAdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManageAdComponent = class ManageAdComponent {
    constructor() { }
    ngOnInit() {
    }
};
ManageAdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-ad',
        template: __webpack_require__(/*! raw-loader!./manage-ad.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/manage-ad/manage-ad.component.html"),
        styles: [__webpack_require__(/*! ./manage-ad.component.css */ "./src/app/pages/manage-ad/manage-ad.component.css")]
    })
], ManageAdComponent);



/***/ }),

/***/ "./src/app/pages/monitor-page/monitor-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/monitor-page/monitor-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vbml0b3ItcGFnZS9tb25pdG9yLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/monitor-page/monitor-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/monitor-page/monitor-page.component.ts ***!
  \**************************************************************/
/*! exports provided: MonitorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorPageComponent", function() { return MonitorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MonitorPageComponent = class MonitorPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
MonitorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-monitor-page',
        template: __webpack_require__(/*! raw-loader!./monitor-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/monitor-page/monitor-page.component.html"),
        styles: [__webpack_require__(/*! ./monitor-page.component.css */ "./src/app/pages/monitor-page/monitor-page.component.css")]
    })
], MonitorPageComponent);



/***/ }),

/***/ "./src/app/pages/new-ad/new-ad.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/new-ad/new-ad.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy1hZC9uZXctYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/new-ad/new-ad.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/new-ad/new-ad.component.ts ***!
  \**************************************************/
/*! exports provided: NewAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAdComponent", function() { return NewAdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewAdComponent = class NewAdComponent {
    constructor() { }
    ngOnInit() {
    }
};
NewAdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-ad',
        template: __webpack_require__(/*! raw-loader!./new-ad.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/new-ad/new-ad.component.html"),
        styles: [__webpack_require__(/*! ./new-ad.component.css */ "./src/app/pages/new-ad/new-ad.component.css")]
    })
], NewAdComponent);



/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserProfileComponent = class UserProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user-profile/user-profile.component.html"),
        styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/pages/user-profile/user-profile.component.css")]
    })
], UserProfileComponent);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/storage */ "./src/app/config/storage.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");





let AuthenticationService = class AuthenticationService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    handleError(error) {
        console.error('Something has gone wrong', error);
        return Promise.reject(error.message || error);
    }
    makeAuthApiCall(urlPath, user) {
        const url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + urlPath;
        return this.http
            .post(url, user)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
    getToken() {
        return this.storage.getItem('customer-token');
    }
    saveToken(token) {
        this.storage.setItem('customer-token', token);
    }
    login(user) {
        return this.makeAuthApiCall('login', user).then((authRes) => {
            this.saveToken(authRes.token);
        });
    }
    register(user) {
        return this.makeAuthApiCall('register', user).then((authRes) => {
            this.saveToken(authRes.token);
        });
    }
    logout() {
        this.storage.removeItem('customer-token');
    }
    isLoggedIn() {
        const token = this.getToken();
        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp > (Date.now() / 1000);
        }
        else {
            return false;
        }
    }
    getCurrentUser() {
        if (this.isLoggedIn()) {
            const token = this.getToken();
            const { username } = JSON.parse(atob(token.split('.')[1]));
            return { username };
        }
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: Storage, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_config_storage__WEBPACK_IMPORTED_MODULE_2__["BROWSER_STORAGE"],] }] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_config_storage__WEBPACK_IMPORTED_MODULE_2__["BROWSER_STORAGE"]))
], AuthenticationService);



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    apiBaseUrl: "http://localhost:3000/",
    production: true
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    apiBaseUrl: "http://localhost:3000/",
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\almehairbi\NodeJS\buyanycaronline\app\buyanycaronline\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map