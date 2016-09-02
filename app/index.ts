/**
 * Created by adortbud on 9/1/2016.
 */
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
import {Component, Inject, forwardRef} from 'angular2/core';
import { UserService } from './users/users.service';
import {IUser} from "./users/user";
import { UserComponent } from './users/user.component';
import {AfterViewInit} from "angular2/src/core/metadata/lifecycle_hooks";

@Component({
    selector: 'app-main',
    template:`  
    <div class="container">
        <div class="row">
        <div class="form-horizontal">
            <div class="form-group">
                <label for="inputSearch" class="col-lg-2 col-md-2 col-sm-3 control-label">Search Criteria</label>                
                <div class="col-lg-4 col-md-6 col-sm-9">
                    <input class="form-control ng-untouched ng-pristine ng-valid" id="inputSearch" [(ngModel)]="searchTerm"  placeholder="Email" type="text">
                </div>
                <button class="col-lg-4 col-md-2 col-sm-3 btn btn-primary" (click)="search()"  type="submit">Submit</button>                
            </div>
        </div>
        </div>
        <div class="row" >
            <div class="col-lg-4 col-lg-offset-4">
                    <div id="tile2" class="tile">
                        <div class="carousel slide" data-ride="carousel" id="myCarousel">                        
                            <div class="carousel-inner">
                                <div class="item active dynamicTile">
                                    <P *ngIf="user">Number of Tools: {{ user.numberOfTools | number }}</P>
                                </div>
                                <div class="item dynamicTile">
                                    <P *ngIf="user">Number of Profiles: {{ user.numberOfProfiles | number }}</P>
                                </div>
                            </div>                           
                        </div> 
                    </div>
            </div>
        </div>         
    </div>
    <user *ngIf="user" [user]="user"></user>
    
    
`,
    directives: [ UserComponent ],
    providers: [HTTP_PROVIDERS ]
})

export class IndexComponent implements AfterViewInit{
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
                this.startCarousel();
                this.user = result;

            }
        }, (err) => {
            console.log(err);
        });
    }

    ngAfterViewInit(){
        this.startCarousel();
    }

    startCarousel() : void {
        $('#myCarousel').carousel({interval: 5000});
    }
}