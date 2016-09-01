import {Injectable,forwardRef} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {IUser} from './user';
import {Inject} from "angular2/src/core/di/decorators";

@Injectable()
export class UserService {
    private _userServiceUrl = 'mock-data/userdata.json';
    private _http: Http;

    constructor(@Inject(forwardRef(() => Http)) _http) {
        this._http = _http;
    }

    getUsers(search: string): Observable<IUser> {
    //getUsers(search: string): IUser[] {
       // var users: IUser[] = [{ firstName: 'ryan', lastName: 'garlock'}];
       // return users;
         return this._http.get(this._userServiceUrl)
             .map((resp: Response) => <IUser>resp.json());
    }
}
