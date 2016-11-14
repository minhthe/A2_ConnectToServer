/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {NavbarComponent} from './navbar.component';
import {UsersComponent} from './Users.component';
import {PostsComponent} from './posts.component';
import {UserFormComponent} from './user-form.component';
import {NotFoundComponent} from './notfound.component';


//when user click the post navigation,
//it will show the post page..
// post page "post.component.html" show all the list of post
// that retrive from the "post.service.ts"
//to do that you need create a router
//as well as the good view the the page post. should add boostrap on it.


@RouteConfig([
    {path:'/users', name:'Users', component:UsersComponent,useAsDefault:true},
    {path:'/posts', name:'Posts', component:PostsComponent},
    {path:'/users/new', name:'NewUser', component:UserFormComponent},
    {path:'/users/:id', name:'EditUser', component:UserFormComponent},
    {path:'/not-found', name:'NotFound', component:NotFoundComponent},
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