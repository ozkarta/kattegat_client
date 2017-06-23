import { Component } from '@angular/core';


import { GenericHttpService } from "../../modules/http/generic/generic.http.service";

import * as $ from "jquery";


@Component({
    selector: 'category-grid',
    templateUrl: '../../views/general/category.grid.component.html',
    styleUrls: ['../../styles/general/category.grid.style.css']
})
export class VisitorCategoryComponent {
    title = 'app works!';

    constructor(private httpservice: GenericHttpService) {
        //  DOCUMENT READY

        //______________________________________

        this.httpservice.getCategoryList()
            .subscribe(
            (res) => {
                console.log("response ...");
                //console.dir(res);


                let categoryListElement = $("#category-element");
                this.createCategoryGrid(categoryListElement, res.category);
                this.setGrid();
            },
            (err) => {
                console.dir(err);
            }
            );


    }

    private createCategoryGrid(element, data) {


        console.dir(element);

        

        
        data.forEach(el => {
            let li=$('<li></li>');
            let label = $('<label class="tree-toggle nav-header">'+el.category_name+'</label>');


            li.append(label);

            this.generateGrid(li,el.child_category)

            $(element).append(li);
        });
    }

    private generateGrid(li,data){
       
       let ul = $('<ul class="nav nav-list tree" style="display:none"></ul>');
       data.forEach(el =>{
            if(el.child_category.length==0){
                let innerLi = $('<li><a href="./default">'+el.category_name+'</a></li>');
                ul.append(innerLi);
            }else{
                let innerLi = $('<li></li>');
                let label = $('<label class="tree-toggle nav-header">'+el.category_name+'</label>');
                innerLi.append(label);

                this.generateGrid(innerLi,el.child_category);
                ul.append(innerLi);
            }
       });
       li.append(ul);
    }

    private setGrid() {
        // $(document).ready(function () {

            $('.tree-toggle').click(function () {
                $(this).parent().children('ul.tree').toggle(200);
            });
            console.log("setting grid...");
        // });
    }

}
