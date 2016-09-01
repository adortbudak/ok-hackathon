/**
 * Created by adortbud on 9/1/2016.
 */
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
import {Component, Inject, forwardRef} from 'angular2/core';
import { UserService } from './users/users.service';
import {IUser} from "./users/user";
import { UserComponent } from './users/user.component';

@Component({
    selector: 'app-main',
    template:`
    <div class="container">
        <div class="titleheader">
        	<img src="../images/one-key-logo.png" width="215" height="53" alt="ONE-KEY&trade; | Unlocking the Digital Jobsite."/>
        </div> 
    </div>

    <div class="container">
        <div class="form-horizontal">
            <div class="form-group">
                <label for="inputSearch" class="col-lg-2 col-md-2 col-sm-3 control-label">Search Criteria</label>                
                <div class="col-lg-8 col-md-6 col-sm-9">
                    <input class="form-control ng-untouched ng-pristine ng-valid" id="inputSearch" [(ngModel)]="searchTerm" placeholder="Email" type="text">
                </div>
                <button class="col-lg-2 col-md-2 col-sm-3 btn btn-primary" (click)="search()" type="submit">Submit</button>
            </div>
        </div>
    </div>
    <user *ngIf="user" [user]="user"></user>
`,
    directives: [ UserComponent ],
    providers: [HTTP_PROVIDERS ]
})

export class IndexComponent{
    searchTerm: string;
    user: IUser;
    private _userService : UserService;

    constructor(@Inject(forwardRef(() => UserService)) _userService,
                @Inject(forwardRef(() => Http)) _http)  {
        this._userService = _userService;

    }

    search(): void {
        this.user = undefined;
        this._userService.getUser(this.searchTerm).subscribe((result) => {
            if (result) {
                this.user = result;
            }
        }, (err) => {
            console.log(err);
        });
    }
}