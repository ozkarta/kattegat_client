import { Component } from '@angular/core';


import { GenericHttpService } from "../../modules/http/generic/generic.http.service";

import * as $ from "jquery";


@Component({
  selector: 'buyer-buy-place',
  templateUrl: '../../views/buyer/buyer.buy.place.component.html',
  styleUrls: ['../../styles/buyer/buyer.buy.place.style.css']
})
export class BuyerBuyPlaceComponent {
  title = 'app works!';

  constructor(private httpservice: GenericHttpService) {
  }


}
