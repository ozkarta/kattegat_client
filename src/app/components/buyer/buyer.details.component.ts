import { Component ,OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { GenericHttpService } from "../../modules/http/generic/generic.http.service";

import * as $ from "jquery";


@Component({
    selector: '',
    templateUrl: '../../views/buyer/buyer.details.component.html',
    styleUrls: ['../../styles/buyer/buyer.details.style.css']
})
export class BuyerDetailsComponent implements OnInit{
    title = 'app works!';
 

    

    constructor(private httpservice: GenericHttpService,
                private route: ActivatedRoute,
                router: Router) {


      
    }

    ngOnInit(){
        let id: string = this.route.snapshot.params['id'];

        
    }



}
