import { Component, OnInit } from '@angular/core';

import { GenericHttpService } from "../../modules/http/generic/generic.http.service";

import { Router } from '@angular/router';

import * as $ from "jquery";


import { User } from "../../modules/models/user.model";

@Component({
    selector: '',
    templateUrl: '../../views/visitor/visitor.register.component.html',
    styleUrls: ['../../styles/visitor/visitor.register.style.css']
})
export class VisitorRegistration implements OnInit {
    title = 'app works!';
    buyer: User;

    //  validation booleans
    fNameValid: boolean;
    lNameValid: boolean;
    eMailValid: boolean;
    passwordValid: boolean;
    passwordReValid: boolean;

    constructor(private httpservice: GenericHttpService,
                private router: Router) {
        this.buyer = new User();
        this.buyer.proccess = "registration";

        this.fNameValid = false;
        this.lNameValid = false;
        this.eMailValid = false;
        this.passwordValid = false;
        this.passwordReValid = false;


    }

    ngOnInit() {


    }

    private register() {
        if (this.fNameValid && this.lNameValid && this.eMailValid && this.passwordValid && this.passwordReValid) {
            console.log("registering user....");
            console.dir(this.buyer);
            this.httpservice.registerBuyer(this.buyer)
                .subscribe(
                    (result)=>{
                        console.dir(result);

                        if(result.user){

                            let registeredBuyer = new User();

                            registeredBuyer._id = result.user._id;
                            registeredBuyer.createdAt = result.user.createdAt;
                            registeredBuyer.updatedAt = result.user.updatedAt;

                            registeredBuyer.type=result.user.type;

                            registeredBuyer.fName = result.user.fName;
                            registeredBuyer.lName = result.user.lName;
                            registeredBuyer.eMail = result.user.eMail;
                            registeredBuyer.eMailConfirmed = result.user.eMailConfirmed;

                            
                            try{
                                localStorage.setItem('USER',JSON.stringify(registeredBuyer));
                                this.router.navigate([""]);
                            }catch(ex){
                                console.dir(ex);
                            }
                        }

                    },
                    (err)=>{
                        console.dir(err);
                    }
                )
                
        }
    }

    private validateEMail() {

        let mail = this.buyer.eMail;

        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

        if (mail.trim() === "" || mail.length <= 5 || !EMAIL_REGEXP.test(mail)) {
            this.eMailValid = false;
        } else {
            this.eMailValid = true;
        }
    }

    private validateFName() {

        let REG_EXP = /^[a-zA-Z0-9_.-]*$/i;
        let fName = this.buyer.fName;

        if (fName.trim() === "") {
            this.fNameValid = false;
            return;
        }
        if (!REG_EXP.test(fName)) {
            this.fNameValid = false;
            return;
        }

        if (fName.length < 5) {
            this.fNameValid = false;
            return;
        }

        this.fNameValid = true;

    }
    private validateLName() {
        let REG_EXP = /^[a-zA-Z0-9_.-]*$/i;
        let lName = this.buyer.lName;

        if (lName.trim() === "") {
            this.lNameValid = false;
            return;
        }
        if (!REG_EXP.test(lName)) {
            this.lNameValid = false;
            return;
        }
        if (lName.length < 5) {
            this.lNameValid = false;
            return;
        }

        this.lNameValid = true;
    }
    private validatePassword() {
        let password = this.buyer.password;

        if (password.trim() === "") {
            this.passwordValid = false;
            return;
        }
        if (password.length < 5) {
            this.passwordValid = false;
            return;
        }

        this.passwordValid = true;
    }
    private validatePasswordRe() {
        let password = this.buyer.password;
        let passwordRe = this.buyer.passwordRe;

        if (password === passwordRe) {
            this.passwordReValid = true;
        } else {
            this.passwordReValid = false;
        }
    }


    addJQUERY() {
        console.log('jquery must be there');

        $('.taboz ul li:first').addClass('active');
        $('.tab-content:not(:first)').hide();
        $('.taboz ul li a').click(function (event) {
            event.preventDefault();
            var content = $(this).attr('href');
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
            $(content).show();
            $(content).siblings('.tab-content').hide();
        });
    }

}
