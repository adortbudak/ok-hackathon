import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {IUser} from './user';

@Injectable()
export class UserService {
    private _userServiceUrl = 'http://onekeyapilocal.milwaukeetool.com:80/admin/users?search=';

    constructor(private _http: Http) { }

    // getUsers(): Observable<IUser[]> {
    getUser(search: string): IUser {
        var user: IUser;
        user = { firstName: 'ryan', lastName: 'garlock', email: 'garlockrd@gmail.com', numberOfTools: 5243, numberOfProfiles: 0 };
        return user;
        // return this._http.get(this._userServiceUrl + search)
        //     .map((resp: Response) => <IUser[]>resp.json());
    }
}
