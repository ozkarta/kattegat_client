import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';



@Injectable()
export class VisitorGuard implements CanActivate {


    constructor(private router: Router){}

    canActivate() {
        console.log('visitor Guard');
        let user = JSON.parse(localStorage.getItem('USER'));
        console.dir(user);

        if (!user){
            return true;
        }   

        if(user.type === 'BUYER'){
            this.router.navigate(['buyer']);
            return false;
        }

        if(user.type === 'SELLER'){
            this.router.navigate(['seller']);
            return false;
        }

        if(user.type === 'MODERATOR'){
            this.router.navigate(['moderator']);
            return false;
        }

        if(user.type === 'ADMINISTRATOR'){
            this.router.navigate(['administrator']);
            return false;
        }
        
    }

}