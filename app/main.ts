import {bootstrap} from 'angular2/platform/browser';
import {Http, Response} from 'angular2/http';
import {Component} from 'angular2/core';
import { UserService } from './users/users.service';

@Component({
    selector: 'app',
    template: `<div>Some Text</div>`,
    providers: [ UserService ]
})

export class AppComponent{
    constructor(private _userService: UserService, private _http: Http) {
        console.log(_http);
        console.log(_userService);
        this._userService = new UserService(_http);
        var users = this._userService.getUsers('');
        console.log(users);
    }
}

bootstrap(AppComponent);
