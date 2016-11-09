import {Component} from 'angular2/core'
import {BasicValidators} from './basicValidators';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common'

@Component({
    templateUrl : 'app/user-form.component.html',
})


export class UserFormComponent{
    form : ControlGroup;

    constructor(fb : FormBuilder){
           this.form = fb.group({
               name:['', Validators.required],
               email:  ['', BasicValidators.email],
               phone:[],
               address:fb.group({
                    street:[],
                    suite:[],
                    city:[],
                    zipcode:[],
               })
           }) 
    }

}