import {bootstrap} from 'angular2/platform/browser';
import {Http, Response} from 'angular2/http';
import {Component} from 'angular2/core';
import { UserService } from './users/users.service';
import { IndexComponent } from './index.component';

@Component({
    selector: 'app',
    template: '<index></index>',
    directives: [ IndexComponent ],
    providers: [ Http, UserService ]
})

export class AppComponent{
    constructor( ) {
    }
}
