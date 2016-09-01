import { Component, Input } from 'angular2/core';
import { IUser } from './user';

@Component({
    selector: 'user',
    templateUrl: './views/user.html',
    styleUrls:  ['./content/user.component.css']
})

export class UserComponent{
    @Input() user: IUser;

    constructor() { }
}
