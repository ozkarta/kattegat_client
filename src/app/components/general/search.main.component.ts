import { Component, OnInit, OnChanges } from '@angular/core';


import { GenericHttpService } from "../../modules/http/generic/generic.http.service";

import * as $ from "jquery";


@Component({
    selector: 'search-main',
    templateUrl: '../../views/general/search.main.component.html',
    styleUrls: ['../../styles/general/search.main.style.css']
})
export class SearchMainComponent implements OnInit, OnChanges {
    title = 'app works!';
    categoryList: any;

    searchInCategoryTitle: string;
    searchCategoryId: string;
    searchString: string;

    constructor(private httpservice: GenericHttpService) {


        this.categoryList = [];

        this.searchInCategoryTitle = "Search in category ...";




    }

    public ngOnInit() {
        //this.documentReady();
        //console.dir($(document));
        this.httpservice.getCategoryList()
            .subscribe(
                (res) => {
                    this.categoryList = res.category;

                },
                (err) => {
                    console.dir(err);
                }
            );
    }
    public ngOnChanges() {
        //this.documentReady();

    }


    private search() {
        console.log("searching .....");

        console.log(this.searchString+' in  ----> '+this.searchCategoryId);
        
    }

    private categorySelected(element){
        console.log('category selected ....');
        //console.dir(element);

        if(element){
            this.searchCategoryId = element._id;
            this.searchInCategoryTitle = element.category_name;
        }
    }


    private documentReady() {
        $(document).ready(function () {
            $('.search-panel .dropdown-menu').find('a').click(function (e) {
                e.preventDefault();
                var param = $(this).attr("href").replace("#", "");
                var concept = $(this).text();
                $('.search-panel span#search_concept').text(concept);
                $('.input-group #search_category').val(param);
            });
        })
    }


}
