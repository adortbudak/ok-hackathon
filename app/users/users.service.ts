import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {IUser} from './user';
import { Tool } from './tool';

@Injectable()
export class UserService {
    private _userServiceUrl = 'http://onekeyapilocal.milwaukeetool.com:80/admin/users?search=';

    constructor(private _http: Http) { }

    // getUsers(): Observable<IUser[]> {
    getUser(search: string): IUser {
        var user: IUser;
        var items: Tool[] = [{ createDate: new Date(), description: 'Testor', serialNumber: '111111', modelNumber: '2000-20' }];
        user = { firstName: 'ryan', lastName: 'garlock', email: 'garlockrd@gmail.com', numberOfTools: 5243, numberOfProfiles: 0, items: items };
        return user;
        // return this._http.get(this._userServiceUrl + search)
        //     .map((resp: Response) => <IUser[]>resp.json());
    }
}
