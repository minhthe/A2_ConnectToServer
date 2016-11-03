import {Component} from 'angular2/core'
import {RouterLink, Router} from 'angular2/router'

@Component({
    selector : 'navbar',
    templateUrl : 'app/navbar.component.html',
    directives : [RouterLink]
})


export class NavbarComponent{
    constructor(private _router : Router){

    }

    isCurrentRoute(router) : boolean{
            var instructor = this._router.generate(router);
            return  this._router.isRouteActive(instructor);
    }
}