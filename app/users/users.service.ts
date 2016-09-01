import {Injectable,forwardRef, Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Tool } from './tool';
import {IUser} from './user';




@Injectable()
export class UserService {
    private _userServiceUrl = 'http://onekeyapilocal.milwaukeetool.com:80/admin/users?search=';
    private _http: Http;

    constructor(@Inject(forwardRef(() => Http)) _http) {
        this._http = _http;
    }

    getUser(search: string): Observable<IUser> {
    //getUsers(search: string): IUser[] {
       // var users: IUser[] = [{ firstName: 'ryan', lastName: 'garlock'}];
       // return users;
         return this._http.get(this._userServiceUrl)
             .map((resp: Response) => <IUser>resp.json());
    }
}
