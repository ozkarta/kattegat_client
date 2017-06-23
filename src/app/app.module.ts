import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { LocalStorageModule } from 'angular-2-local-storage';

import { Router } from '@angular/router';


// Components
import { AppComponent } from './app.component';

//      GENERAL
import { VisitorCategoryComponent } from "./components/general/category.grid.component";
import { VisitorCategory2Component } from "./components/general/category.grid2.component";
import { SearchMainComponent } from "./components/general/search.main.component";
import { ListviewComponent } from "./components/general/listview.component";
import { TableviewComponent } from "./components/general/tableview.component";
import { DetailsviewComponent } from "./components/general/detailsview.component";

//      VISITOR
import { VisitorNavBar } from "./components/visitor/visitor.navbar.component";
import { VisitorHomeComponent } from "./components/visitor/visitor.home.component";
import { VisitorRegistration } from "./components/visitor/visitor.register.component";
import { VisitorLogin } from './components/visitor/visitor.login.component';
import { VisitorDetailsComponent } from './components/visitor/visitor.detail.component';
//      BUYER
import { BuyerNavbarComponent } from "./components/buyer/buyer.navbar.component";
import { BuyerHomeComponent } from "./components/buyer/buyer.home.component";
import { BuyerBuyPlaceComponent } from "./components/buyer/buyer.buy.place.component";
import { BuyerDetailsComponent } from "./components/buyer/buyer.details.component";
//      ADMINISTRATOR
import { AdministratorNavBar } from "./components/administrator/administrator.navbar.component";
import { AdministratorHomeComponent } from "./components/administrator/administrator.home.component";
import { AdminSidebarComponent } from "./components/administrator/admin.sidebar.component";
//      SELLER
import { SellerHomeComponent } from "./components/seller/seller.home.component";
import { SellerNavBarComponent } from "./components/seller/seller.navbar.component";
import { SellerSidebarComponent } from "./components/seller/seller.sidebar.component";
//      MODERATOR
import { ModeratorHomeComponent } from "./components/moderator/moderator.home.component";
import { ModeratorNavBarComponent } from "./components/moderator/moderator.navbar.component";


// SERVICES

import { GenericHttpService } from "./modules/http/generic/generic.http.service";

// Router
import { MainRouter } from "./routing/main.router";

// GUARDS 
import { VisitorGuard } from "./routing/guards/visitor.guard";

import { BuyerGuard } from "./routing/guards/buyer.guard";

import { SellerGuard } from "./routing/guards/seller.guard";

import { ModeratorGuard } from "./routing/guards/moderator.guard";

import { AdministratorGuard } from "./routing/guards/administrator.guard";

import { LogOut } from "./routing/logout";

@NgModule({
  declarations: [
    AppComponent,


    // GENERAL
    VisitorCategoryComponent,
    VisitorCategory2Component,
    SearchMainComponent,
    ListviewComponent,
    TableviewComponent,
    DetailsviewComponent,

    // VISITOR
    VisitorNavBar,
    VisitorHomeComponent,
    VisitorRegistration,
    VisitorLogin,
    VisitorDetailsComponent,

    // BUYER
    BuyerNavbarComponent,
    BuyerHomeComponent,
    BuyerBuyPlaceComponent,
    BuyerDetailsComponent,

    // ADMINISTRATOR
    AdministratorHomeComponent,
    AdministratorNavBar,
    AdminSidebarComponent,

    // SELLER
    SellerHomeComponent,
    SellerNavBarComponent,
    SellerSidebarComponent,
    // MODERATOR
    ModeratorHomeComponent,
    ModeratorNavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    MainRouter
  ],
  providers: [

    // SERVICES
    GenericHttpService,
    // GUARDS
    VisitorGuard,
    BuyerGuard,
    SellerGuard,
    ModeratorGuard,
    AdministratorGuard,
    //  LogOut
    LogOut


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
