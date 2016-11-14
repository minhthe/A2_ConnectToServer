/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/router', './navbar.component', './Users.component', './posts.component', './user-form.component', './notfound.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, navbar_component_1, Users_component_1, posts_component_1, user_form_component_1, notfound_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (Users_component_1_1) {
                Users_component_1 = Users_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (user_form_component_1_1) {
                user_form_component_1 = user_form_component_1_1;
            },
            function (notfound_component_1_1) {
                notfound_component_1 = notfound_component_1_1;
            }],
        execute: function() {
            //when user click the post navigation,
            //it will show the post page..
            // post page "post.component.html" show all the list of post
            // that retrive from the "post.service.ts"
            //to do that you need create a router
            //as well as the good view the the page post. should add boostrap on it.
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/users', name: 'Users', component: Users_component_1.UsersComponent, useAsDefault: true },
                        { path: '/posts', name: 'Posts', component: posts_component_1.PostsComponent },
                        { path: '/users/new', name: 'NewUser', component: user_form_component_1.UserFormComponent },
                        { path: '/users/:id', name: 'EditUser', component: user_form_component_1.UserFormComponent },
                        { path: '/not-found', name: 'NotFound', component: notfound_component_1.NotFoundComponent },
                        { path: '/*other', name: 'other', redirectTo: ['Users'] },
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n         <navbar></navbar>\n         <div class=\"container\">\n            <router-outlet>\n            </router-outlet>\n         </div>\n    \n             ",
                        directives: [navbar_component_1.NavbarComponent, router_1.RouterOutlet]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map