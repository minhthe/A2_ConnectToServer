import {Component, OnInit} from 'angular2/core'
import {BasicValidators} from './basicValidators';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common'
import {CanDeactivate, Router, RouteParams} from 'angular2/router'

import {UsersService} from './users.service';
import {User} from './user';

@Component({
    templateUrl: 'app/user-form.component.html',
    providers : [UsersService]
})


export class UserFormComponent implements CanDeactivate, OnInit {
    title : string;
    form: ControlGroup;
    
    user = new User();
    
    constructor(fb: FormBuilder, private _router : Router, private _userService: UsersService, private _routeParams :RouteParams ) {
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
    ngOnInit(){
        var id = this._routeParams.get("id");
        this.title = id? "Edit User" : "New User";
        if(!id){
            return;
        }
         this._userService.getUser(id)
			.subscribe(
                user => this.user = user.json(),
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                });


    }

save(){
        var result ;
        if(this.user.id)
            result = this._userService.updateUser(this.user);
        else 
            result =  this._userService.addUser(this.form.value);
            result.subscribe(x=> {
            

        this._router.navigate(['Users']);
    })
}
    routerCanDeactivate(){
            if (this.form.dirty) {
                return confirm('You have unsaved changes. Are you sure you want to navigate away?');
            }
        }

}