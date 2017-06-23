import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { GenericHttpService } from '../../modules/http/generic/generic.http.service';
import { User } from '../../modules/models/user.model';
import * as $ from "jquery";


@Component({
    selector: 'visitor-login',
    templateUrl: '../../views/visitor/visitor.login.component.html',
    styleUrls: ['../../styles/visitor/visitor.login.style.css']
})
export class VisitorLogin {
    title = 'app works!';

    buyer: User;

    constructor(private httpservice: GenericHttpService,
                private router: Router) {
        this.buyer = new User();


    }


    private login() {
        console.dir(this.buyer);

        if (this.validateEMail() && this.validatePassword()) {
            this.httpservice.logInBuyer(this.buyer)
                .subscribe(
                (result) => {
                    console.dir(result);
                    
                    if (result.user) {

                        let registeredBuyer = new User();

                        registeredBuyer._id = result.user._id;
                        registeredBuyer.createdAt = result.user.createdAt;
                        registeredBuyer.updatedAt = result.user.updatedAt;

                        registeredBuyer.type = result.user.type;

                        registeredBuyer.fName = result.user.fName;
                        registeredBuyer.lName = result.user.lName;
                        registeredBuyer.eMail = result.user.eMail;
                        registeredBuyer.eMailConfirmed = result.user.eMailConfirmed;


                        try {
                            localStorage.setItem('USER', JSON.stringify(registeredBuyer));
                            this.router.navigate(['']);
                        } catch (ex) {
                            console.dir(ex);
                        }
                    }
                },
                (err) => {

                }
                )
        } else {

        }

    }

    private validateEMail() {

        let mail = this.buyer.eMail;

        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

        if (mail.trim() === "" || mail.length <= 5 || !EMAIL_REGEXP.test(mail)) {
            return false;
        } else {
            return true;
        }
    }

    private validatePassword(): boolean {
        let password = this.buyer.password;

        if (password.trim() === "") {
            return false;
        }
        if (password.length < 5) {
            return false;
        }

        return true;
    }

}
