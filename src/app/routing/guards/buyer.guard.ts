import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';



@Injectable()
export class BuyerGuard implements CanActivate {


    constructor(private router: Router){}

    canActivate() {
        console.log('visitor Guard');
        let user = JSON.parse(localStorage.getItem('USER'));
        console.dir(user);

        if (!user){
            return false;
        }
        
        if(user.type === 'BUYER'){
            return true;
        }
         
    }

}