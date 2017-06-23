import { Component ,OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { GenericHttpService } from "../../modules/http/generic/generic.http.service";

import * as $ from "jquery";


@Component({
    selector: '',
    templateUrl: '../../views/visitor/visitor.detail.component.html',
    styleUrls: ['../../styles/visitor/visitor.detail.style.css']
})
export class VisitorDetailsComponent implements OnInit{
    title = 'app works!';
 

    

    constructor(private httpservice: GenericHttpService,
                private route: ActivatedRoute,
                router: Router) {


      
    }

    ngOnInit(){
        let id: string = this.route.snapshot.params['id'];

        
    }



}
