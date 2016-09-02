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
    styleUrls:  ['./content/index.component.css'],
    template:`

    <div class="container">
        <div class="form-horizontal">
            <div class="form-group">
                <label for="inputSearch" class="col-lg-2 col-md-2 col-sm-3 control-label">Search Criteria</label>                
                <div class="col-lg-8 col-md-6 col-sm-9">
                    <div>
                        <input class="form-control ng-untouched ng-pristine ng-valid" id="inputSearch" (keyup)="keyup($event)" [(ngModel)]="searchTerm" placeholder="Email" type="text">
                        <div class="autocomplete" *ngIf="autoCompleteList">
                            <div *ngFor="let user of autoCompleteList; let index=index; let odd=odd; let even=even;" 
                                    [ngClass]="{ 'even': even, selected: index == selectedAutoCompleteIndex }" class="autocomplete-item" 
                                    (click)="autocompleteClick(user.email)">{{ user.email }}</div>
                        </div>
                    </div>
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
    autoCompleteList: IUser[];
    private _userService : UserService;

    constructor(@Inject(forwardRef(() => UserService)) _userService,
                @Inject(forwardRef(() => Http)) _http)  {
        this._userService = _userService;

    }

    autocompleteClick(email: string): void {
        this.searchTerm = email;
        this.search();
    }

    search(): void {
        this.user = undefined;
        this.autoCompleteList = undefined;
        this._userService.getUser(this.searchTerm).subscribe((result) => {
            if (result) {
                this.user = result;
            }
        }, (err) => {
            console.log(err);
        });
    }

    selectedAutoCompleteIndex: number = -1;
    keyup($event): void {
        var keyCode = $event.keyCode;
        switch (keyCode) {
            case 13:
                if (this.selectedAutoCompleteIndex > -1) {
                    this.searchTerm = this.autoCompleteList[this.selectedAutoCompleteIndex].email;
                }
                this.search();
                break;
            case 40:
                var max = this.selectedAutoCompleteIndex + 1;
                if (this.autoCompleteList && max != this.autoCompleteList.length) {                    
                    this.selectedAutoCompleteIndex++;
                }
                break;
            case 38:
                if (this.autoCompleteList && this.selectedAutoCompleteIndex > -1) {
                    this.selectedAutoCompleteIndex--;
                }
                break;
            default:
                this.autoComplete();
                break;
        }
    }

    autoComplete(): void {
        this.selectedAutoCompleteIndex = -1;
        this._userService.getAutoComplete(this.searchTerm).subscribe((result) => {
            if (result) {
                this.autoCompleteList = result;
            }
        }, (err) => {
            console.log(err);
        });
    }
}