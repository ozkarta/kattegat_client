import { Component } from '@angular/core';


import { GenericHttpService } from "../../modules/http/generic/generic.http.service";

import * as $ from "jquery";


@Component({
  selector: 'seller-sidebar',
  templateUrl: '../../views/seller/seller.sidebar.component.html',
  styleUrls: ['../../styles/seller/seller.sidebar.style.css']
})
export class SellerSidebarComponent {
  title = 'app works!';

  constructor(httpservice: GenericHttpService){
    this.initJQUERY();
  }


  private initJQUERY(){

    $(document).ready(function () {
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
    });


  }
}
