import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';



// COMPONENTS

//      General
import { DetailsviewComponent } from "../components/general/detailsview.component";

//      VISITOR
import { VisitorHomeComponent } from "../components/visitor/visitor.home.component";

import { VisitorRegistration } from "../components/visitor/visitor.register.component";

import { VisitorLogin } from "../components/visitor/visitor.login.component";

import { VisitorDetailsComponent } from "../components/visitor/visitor.detail.component";

//      BUYER
import { BuyerHomeComponent } from "../components/buyer/buyer.home.component";
import { BuyerDetailsComponent } from "../components/buyer/buyer.details.component";
//      SELLER
import { SellerHomeComponent } from "../components/seller/seller.home.component";
//      MODERATOR
import { ModeratorHomeComponent } from "../components/moderator/moderator.home.component";
//      ADMINISTRATOR
import { AdministratorHomeComponent } from "../components/administrator/administrator.home.component";

//GUARDS

import { VisitorGuard } from "./guards/visitor.guard";

import { BuyerGuard } from "./guards/buyer.guard";

import { SellerGuard } from "./guards/seller.guard";

import { ModeratorGuard } from "./guards/moderator.guard";

import { AdministratorGuard } from "./guards/administrator.guard";

import { LogOut } from "./logout";


const routes: Routes = [
    {
        path: '',
        component: VisitorHomeComponent,
        canActivate: [VisitorGuard]
    }, {
        path: 'register',
        component: VisitorRegistration,
        canActivate: [VisitorGuard]
    },{
        path: 'item/:id',
        component: VisitorDetailsComponent,
        canActivate: [VisitorGuard]
    },
    {
        path: 'buyer',
        component: BuyerHomeComponent,
        canActivate: [BuyerGuard]
    },{
        path: 'buyer/item/:id',
        component: BuyerDetailsComponent,
        canActivate: [BuyerGuard]
    },
    {
        path: 'seller',
        component: SellerHomeComponent,
        canActivate: [SellerGuard]
    },
    {
        path: 'moderator',
        component: ModeratorHomeComponent,
        canActivate: [ModeratorGuard]
    },
    {
        path: 'administrator',
        component: AdministratorHomeComponent,
        canActivate: [AdministratorGuard]
    },


    //_________________LOGOUT
    {
        path: 'logout',
        component: VisitorHomeComponent,
        canActivate: [LogOut]
    },
    {
        path: 'login',
        component: VisitorLogin,
        canActivate: [VisitorGuard]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MainRouter {

};