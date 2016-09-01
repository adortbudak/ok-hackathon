import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { AppSettings }        from './app.settings';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ AppSettings ]
})

export class AppComponent {
}

