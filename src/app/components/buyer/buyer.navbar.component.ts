import { Component } from '@angular/core';


import { GenericHttpService } from "../../modules/http/generic/generic.http.service";

import * as $ from "jquery";


@Component({
  selector: 'buyer-navbar',
  templateUrl: '../../views/buyer/buyer.navbar.component.html',
  styleUrls: ['../../styles/buyer/buyer.navbar.style.css']
})
export class BuyerNavbarComponent {
  title = 'app works!';

  constructor(private httpservice: GenericHttpService) {

      
  }


}
