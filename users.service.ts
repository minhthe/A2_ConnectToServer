import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';



@Injectable()
export class UsersService{
    private _url = "https://jsonplaceholder.typicode.com/users";
    constructor(private _http : Http){
    }

    getUsers(){
        
       return  this._http.get(this._url).map(user=>  user.json());
        
        
    }

    addUser(user){
        return this._http.post(this._url, JSON.stringify(user)).map(user => user.json());
    }

    getUser(id){
       // return this._http.get(this._url + "/" + id).map(user => user.json());
        return this._http.get(this._url + "/" + id);
    }
}