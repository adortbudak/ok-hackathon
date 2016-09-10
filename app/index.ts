/**
 * Created by adortbud on 9/1/2016.
 */
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';
import {Component, Inject, forwardRef} from 'angular2/core';
import { UserService } from './users/users.service';
import {IUser} from "./users/user";
import { UserComponent } from './users/user.component';
import {AfterViewInit, OnInit} from "angular2/src/core/metadata/lifecycle_hooks";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Weather } from './weather';
import {Injectable} from "angular2/src/core/di/decorators";

@Component({
    selector: 'app-main',
    styleUrls:  ['./content/index.component.css'],
    templateUrl: './views/index.html',
    directives: [ UserComponent ],
    providers: [HTTP_PROVIDERS ]
})

@Injectable()
export class IndexComponent implements OnInit, AfterViewInit{
    searchTerm: string;
    user: IUser;
    autoCompleteList: IUser[];

    constructor(private _userService:UserService, private _http:Http)  {
        this._userService = _userService;
        this._http = _http;
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
                this.startCarousel();
                this.user = result;

            }
        }, (err) => {
            console.log(err);
        });
    }

    location: string = "Brookfield, WI"
    weather: Weather = new Weather();
    ngOnInit() { 
        this.findWeather();
    }

    findWeather(): void {
        this.getWeather().subscribe((result) => {
            if (result) {
                this.weather = result.current_observation;   
                console.log(this.weather);    
            }
        }, (err) => {
            console.log(err);
        });
    }

    weatherKeyUp(event): void {
        if (event.keyCode == 13) {
            this.findWeather();
        }
    }

    getWeather(): Observable<any> {
        var locationArray = this.location.split(",");
        if (locationArray.length != 2) {
            return;
        }
        var city = locationArray[0].trim();
        var state = locationArray[1].trim();
        return this._http.get("http://api.wunderground.com/api/b5d31858560c4bd4/conditions/q/" + state + "/" + city + ".json")
             .map((resp: Response) => <any>(resp.json()));
    }

    selectedAutoCompleteIndex: number = -1;
    keyup(event): void {
        var keyCode = event.keyCode;
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

    ngAfterViewInit(){
        this.startCarousel();
    }

    startCarousel() : void {
        $('#myCarousel').carousel({interval: 3000});
    }
}