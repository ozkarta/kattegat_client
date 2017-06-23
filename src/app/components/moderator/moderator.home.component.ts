import { Component } from '@angular/core';


import { GenericHttpService } from "../../modules/http/generic/generic.http.service";

import * as $ from "jquery";


@Component({
  selector: 'app-root',
  templateUrl: '../../views/moderator/moderator.home.component.html',
  styleUrls: ['../../styles/moderator/moderator.home.style.css']
})
export class ModeratorHomeComponent {
  title = 'app works!';

  constructor(private httpservice: GenericHttpService) {
  }


}
