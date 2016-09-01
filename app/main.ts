import {bootstrap} from 'angular2/platform/browser';

import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `<div>Some Text</div>`
})

export class AppComponent{

}

bootstrap(AppComponent);
