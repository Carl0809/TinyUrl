import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { UrlSet } from '../components/index';

@Injectable()
export class UrlService {
    constructor(private http: Http) { }

    getShortUrl(longUrl: string): Observable<UrlSet> {
        const headers = new Headers({'Content-type': 'application/json'});
        const options = new RequestOptions({headers: headers});

        return this.http.post('/api/v1/urls', {longUrl: longUrl}, options)
                    .map(this.extractUrlSet)
                    .catch(this.handleError);
    }
    extractUrlSet(res: Response) {
        let body = res.json();
        return body as UrlSet || {};
    }

    handleError(error: Response | any) {
        // TODO: Payson: add error handling
        console.log('error');
        return Observable.throw(error);
    }
}
