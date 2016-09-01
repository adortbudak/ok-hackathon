import {bootstrap} from 'angular2/platform/browser';
import {Http, Response} from 'angular2/http';
import {Component} from 'angular2/core';
import { UserService } from './users/users.service';
import { IUser } from './users/user';
import { UserComponent } from './users/user.component';

@Component({
    selector: 'index',
    templateUrl: '../views/main.html',
    directives: [ UserComponent ],
    providers: [ UserService ]
})

export class IndexComponent{
    searchTerm: string;
    user: IUser;

    constructor(private _userService: UserService, private _http: Http) {
        console.log(this._userService);
        this._userService = new UserService(undefined);
    }

    search(): void {
        this.user = this._userService.getUser(this.searchTerm);
        console.log(this.user);
    }
}
