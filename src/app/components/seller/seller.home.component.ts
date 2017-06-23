import { Component } from '@angular/core';


import { GenericHttpService } from "../../modules/http/generic/generic.http.service";

import * as $ from "jquery";


@Component({
  selector: 'app-root',
  templateUrl: '../../views/seller/seller.home.component.html',
  styleUrls: ['../../styles/seller/seller.home.style.css']
})
export class SellerHomeComponent {
  title = 'app works!';

  constructor(private httpservice: GenericHttpService) {
  }


}
