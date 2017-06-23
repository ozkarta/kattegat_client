import { Component } from '@angular/core';


import { GenericHttpService } from "../../modules/http/generic/generic.http.service";

import * as $ from "jquery";


@Component({
  selector: 'app-root',
  templateUrl: '../../views/visitor/visitor.home.component.html',
  styleUrls: ['../../styles/visitor/visitor.home.style.css']
})
export class VisitorHomeComponent {
  title = 'app works!';

  constructor(private httpservice: GenericHttpService) {
  }


}
