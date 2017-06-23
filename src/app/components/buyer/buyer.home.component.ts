import { Component } from '@angular/core';


import { GenericHttpService } from "../../modules/http/generic/generic.http.service";

import * as $ from "jquery";


@Component({
  selector: 'app-root',
  templateUrl: '../../views/buyer/buyer.home.component.html',
  styleUrls: ['../../styles/buyer/buyer.home.style.css']
})
export class BuyerHomeComponent {
  title = 'app works!';

  constructor(private httpservice: GenericHttpService) {
  }


}
