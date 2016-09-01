/**
 * Created by adortbud on 9/1/2016.
 */
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
import {Component, Inject, forwardRef} from 'angular2/core';
import { UserService } from './users/users.service';
import {IUser} from "./users/user";

@Component({
    selector: 'app-main',
    template:`
        <div class="container">
        <div class="col-lg-4 col-md-4">
            <h3>ONE-KEY User Search</h3>
        </div>
        <div class="col-lg-8 col-md-8">
            <img src=""/>
        </div>
    </div>

    <div class="container">
        <div class="form-horizontal">
            <div class="form-group">
                <label for="inputSearch" class="col-lg-2 col-md-2 col-sm-3 control-label">Search Criteria</label>
                <div class="col-lg-8 col-md-10 col-sm-9">
                    <input type="text" class="form-control" id="inputSearch" placeholder="Email">
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="col-lg-6 col-lg-offset-2">
                <button type="reset" class="btn btn-default">Cancel</button>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
    <user *ngIf="user" [user]="user"></user>
`,
    providers: [HTTP_PROVIDERS]

})

export class IndexComponent{
    searchTerm: string;
    user: IUser;
    _userService : UserService;

    constructor(@Inject(forwardRef(() => UserService)) _userService,
                @Inject(forwardRef(() => Http)) _http)  {
        this._userService = _userService;

    }

    search(): void {
        this._userService.getUser(this.searchTerm).subscribe((result) => {
            if (result) {
                this.user = result;
            }});
        console.log(this.user);
    }

}