import { Component } from '@angular/core';


import { GenericHttpService } from "../../modules/http/generic/generic.http.service";

import * as $ from "jquery";


@Component({
    selector: 'category-grid-2',
    templateUrl: '../../views/general/category.grid2.component.html',
    styleUrls: ['../../styles/general/category.grid2.style.css']
})
export class VisitorCategory2Component {

    categoryList:any [];

    constructor(private httpservice: GenericHttpService) {
    
        this.categoryList = [];


        this.httpservice.getCategoryList()
            .subscribe(
            (res) => {
                console.log("response arrived ...");                

                this.categoryList = res.category;

                //console.dir( res.category);

                let parentElement = $("#category-list");

                //this.createCategoryGrid(parentElement,'category-main-div', res.category,1);

            },
            (err) => {
                console.dir(err);
            }
            );

    }






















    private createCategoryGrid(parentElement, parentId, data, counter) {
        let list_group_sub_menu

        for (let i = 0; i < counter; i++) {
            if (i == 0) {
                list_group_sub_menu = "sub-menu-ozz";
            } else {
                list_group_sub_menu += " sub-menu-ozz" + "-" + i + " ";
            }

        }
        data.forEach(element => {

            if (element.child_category.length > 0) {
                let a = $('<a href="#' + element._id + '" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#' + parentId + '">' + element.category_name + '<i class="fa fa-caret-down"></i></a>');
                parentElement.append(a);

                let sub_category_div = $('<div style="margin-left:5%;" class="collapse ' + list_group_sub_menu + ' " id="' + element._id + '"></div>');
                this.createCategoryGrid(sub_category_div, element._id, element.child_category, counter + 1);
                parentElement.append(sub_category_div);

            } else {
                console.log("empty");
                console.dir(element);
                let a = $('<a routerLink="/grid" class="list-group-item" data-parent="#' + parentId + '">' + element.category_name + '</a>');
                parentElement.append(a);
            }
        });
    }





}
