import {Component} from 'angular2/core'
import {BasicValidators} from './basicValidators';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common'
import {CanDeactivate, Router} from 'angular2/router'

import {UsersService} from './users.service';

@Component({
    templateUrl: 'app/user-form.component.html',
    providers : [UsersService]
})


export class UserFormComponent implements CanDeactivate {
    form: ControlGroup;
    constructor(fb: FormBuilder, private _router : Router, private _usersService: UsersService) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', BasicValidators.email],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: [],
            })
        })       
    }

save(){
    this._usersService.addUser(this.form.value).subscribe(x=> {
        this._router.navigate(['Users']);
    })
}
    routerCanDeactivate(){
            if (this.form.dirty) {
                return confirm('You have unsaved changes. Are you sure you want to navigate away?');
            }
        }

}