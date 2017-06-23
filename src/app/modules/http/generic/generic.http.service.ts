import { Injectable,Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { User } from "../../../modules/models/user.model";

import { GenericAddresses } from "../../generic.addresses";


Injectable()
export class GenericHttpService extends GenericAddresses {
    constructor(@Inject(Http)private http: Http) {
        super();

    }


    public getCategoryList(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.genericAPI_url + '/general/categories')
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getProductList():Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.genericAPI_url + '/general/products')
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getProductWithId(id: string):Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.genericAPI_url + '/general/product/'+id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    //________________
    public registerBuyer(buyer: User): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.genericAPI_url+"/general/register_buyer",buyer,headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public logInBuyer(buyer: User):Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.genericAPI_url+"/general/login_buyer",{eMail:buyer.eMail,password:buyer.password} , headers)
            .map(this.extractData)
            .catch(this.handleError);
    }






    //_______________________________________________________________________

    protected extractData(res: Response) {
        console.log('response for Get Category......');
        //console.dir(res);
        let body = null;

        try {
            body = res.json();
        } catch (exception) {
            console.dir(exception);
        }

        return body;
    }


    protected handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}