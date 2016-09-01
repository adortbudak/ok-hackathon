// import {bootstrap} from 'angular2/platform/browser';
// import {Http, Response} from 'angular2/http';
// import {Component} from 'angular2/core';
// import { UserService } from './users/users.service';

// @Component({
//     selector: 'app',
//     templateUrl: '../views/main.html',
//     providers: [ UserService ]
// })

// export class AppComponent{
//     constructor(private _userService: UserService, private _http: Http) {
//         console.log(_http);
//         console.log(_userService);
//         this._userService = new UserService(_http);
//         var users = this._userService.getUsers('');
//         console.log(users);
//     }
// }

// bootstrap(AppComponent);

// ///<reference path="./../typings/globals/es6-shim/index.d.ts"/>

// main entry point
import { bootstrap }            from 'angular2/platform/browser';
import { AppComponent }         from './app.component';

bootstrap(AppComponent, [ ])
    .catch(err => console.error(err));
