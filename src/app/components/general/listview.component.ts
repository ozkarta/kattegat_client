import { Component } from '@angular/core';


import { GenericHttpService } from "../../modules/http/generic/generic.http.service";

import * as $ from "jquery";


@Component({
    selector: 'listview',
    templateUrl: '../../views/general/listview.component.html',
    styleUrls: ['../../styles/general/listview.style.css']
})
export class ListviewComponent {
    title = 'app works!';


    viewArray: [any];

    constructor(private httpservice: GenericHttpService) {


        this.httpservice.getProductList()
            .subscribe(
                (result) => {
                    this.viewArray = result.product_list;
                    console.dir(this.viewArray);
                },
                (err) => {

                }
            );

    }



}
