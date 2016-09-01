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
    constructor(private _userService: UserService, private _http: Http) {
        console.log(this._userService);
        this._userService = new UserService(_http);
        var users = this._userService.getUsers('');
        console.log(users);
    }
}