import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {IUser} from './user';

@Injectable()
export class UserService {
    private _userServiceUrl = 'mock-data/userdata.json';

    constructor(private _http: Http) { }

    // getUsers(): Observable<IUser[]> {
    getUsers(search: string): IUser[] {
        var users: IUser[] = [{ firstName: 'ryan', lastName: 'garlock'}];
        return users;
        // return this._http.get(this._userServiceUrl)
        //     .map((resp: Response) => <IUser[]>resp.json());
    }
}
