/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {NavbarComponent} from './navbar.component';
import {UsersComponent} from './Users.component';
import {PostsComponent} from './posts.component';
import {UserFormComponent} from './user-form.component';


@RouteConfig([
    {path:'/users', name:'Users', component:UsersComponent,useAsDefault:true},
    {path:'/posts', name:'Posts', component:PostsComponent},
    {path:'/users/new', name:'NewUser', component:UserFormComponent},
    {path:'/*other', name:'other', redirectTo:['Users']},
])

@Component({
    selector: 'my-app',
    template: `
         <navbar></navbar>
         <div class="container">
            <router-outlet>
            </router-outlet>
         </div>
    
             `,
         directives : [ NavbarComponent, RouterOutlet]
})
export class AppComponent {
    constructor(){
    }
    }