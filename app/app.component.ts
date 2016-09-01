import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
import {Component} from 'angular2/core';
import { UserService } from './users/users.service';
import { IndexComponent } from './index';

@Component({
    selector: 'app',
    templateUrl: '../views/main.html',
    providers: [ Http, UserService, HTTP_PROVIDERS ],
    directives: [IndexComponent]
})



export class AppComponent{
    constructor( ) {
    }
}

