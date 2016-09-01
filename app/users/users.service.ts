import {Injectable,forwardRef, Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Tool } from './tool';
import {IUser} from './user';




@Injectable()
export class UserService {
    private _userServiceUrl = 'http://onekeyapitest.milwaukeetool.com/toolsecurity/admin/users?search=';
    private _http: Http;

    constructor(@Inject(forwardRef(() => Http)) _http) {
        this._http = _http;
    }

    getUser(search: string): Observable<IUser> {
         return this._http.get(this._userServiceUrl + search)
             .map((resp: Response) => <IUser>resp.json());
    }
}
