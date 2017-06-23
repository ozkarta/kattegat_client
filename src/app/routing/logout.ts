import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';



@Injectable()
export class LogOut implements CanActivate {


    constructor(private router: Router){}

    canActivate() {
        
        
        localStorage.removeItem('USER');

        this.router.navigate(['login']);
        return false;
    }

}