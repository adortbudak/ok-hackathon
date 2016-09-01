import {bootstrap} from 'angular2/platform/browser';
import {Http, Response} from 'angular2/http';
import {Component} from 'angular2/core';
import { UserService } from './users/users.service';

@Component({
    selector: 'app',
    templateUrl: '../views/main.html',
    providers: [ Http, UserService ]
})

export class AppComponent{

    private _userService: UserService;
    private _http: Http;

    constructor( ) {
        this._userService = new UserService(this._http);
        var users = this._userService.getUsers('');
        console.log(users);
    }
}
