import { Component, OnInit } from '@angular/core';


import { GenericHttpService } from "../../modules/http/generic/generic.http.service";

import * as $ from "jquery";


@Component({
    selector: 'tableview',
    templateUrl: '../../views/general/tableview.component.html',
    styleUrls: ['../../styles/general/tableview.style.css']
})
export class TableviewComponent implements OnInit {
    title = 'app works!';


    viewArray;

    constructor(private httpservice: GenericHttpService) {


        this.viewArray = [];

    }
    ngOnInit() {

        this.httpservice.getProductList()
            .subscribe(
            (result) => {
                this.viewArray = result.product_list;
                console.log('response for products....');
                console.dir(this.viewArray);
            },
            (err) => {

            }
            );

    }



}
