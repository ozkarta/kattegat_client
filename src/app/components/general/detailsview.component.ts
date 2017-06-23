import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { GenericHttpService } from "../../modules/http/generic/generic.http.service";

import * as $ from "jquery";


@Component({
    selector: 'details-view',
    templateUrl: '../../views/general/detailsview.component.html',
    styleUrls: ['../../styles/general/detailsview.style.css']
})
export class DetailsviewComponent implements OnInit, AfterViewInit{
    title = 'app works!';


    viewDetails: any;

    mainImageUrl: string;
    imageUrlList;

    constructor(private httpservice: GenericHttpService,
        private route: ActivatedRoute,
        router: Router) {

        this.viewDetails = undefined;
        this.imageUrlList = [];
    }

    ngOnInit() {
        //this.addJQUERY();



        let id: string = this.route.snapshot.params['id'];

        if (id) {
            this.httpservice.getProductWithId(id)
                .subscribe(
                (res) => {
                    console.dir(res);

                    this.viewDetails = res.data;

                    this.generateImageUrlList();
                },
                (err) => {
                    console.dir(err);
                }
                );
        } else {
            //  redirect to error page
        }

    }

    ngAfterViewInit(){
        this.addJQUERY();
    }


    private isBuyer():boolean{
        let user = JSON.parse(localStorage.getItem('USER'));
        if(user){
            if(user.type === 'BUYER'){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }


    private generateImageUrlList(){
        this.viewDetails.sale_media_list.forEach(element => {
            if(element.type==='main'){
                this.mainImageUrl = element.media_url;                
            }
            this.imageUrlList.push(element.media_url);
        });
    }

    private imageClick(val){
        console.log('image was clicked');
        this.mainImageUrl = val;
    }

    private addJQUERY(){
        console.log('jquery must be there');

        $('.taboz ul li:first').addClass('active');
        $('.tab-content:not(:first)').hide();
        $('.taboz ul li a').click(function (event) {
            console.log('clicked');
            event.preventDefault();
            var content = $(this).attr('href');
            console.dir(content);
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
            $(content).show();
            $(content).siblings('.tab-content').hide();
        });
    }

}
