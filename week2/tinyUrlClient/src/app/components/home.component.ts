import { Component } from '@angular/core';

import { UrlService } from '../services/url.service';

export class UrlSet {
    longUrl: string;
    shortUrl: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
    longUrl: string;
    shortUrl: string;

    constructor(private urlService: UrlService) {

    }

    onSubmit() {
        console.log('hahahaha ' + this.longUrl);
        this.urlService.getShortUrl(this.longUrl)
            .subscribe(
                result => {
                    this.shortUrl = result.shortUrl;
                    console.log('haha, short url is: ' + this.shortUrl);
                },
                error => {
                    console.log(error); // TODO: Payson debug only
                }
            )
    }
}
