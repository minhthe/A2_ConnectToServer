import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';


@Injectable()
export class PostService{
    private _url = "https://jsonplaceholder.typicode.com/posts";
    constructor(private _http : Http){
        
    }

    getPosts(){
        return this._http.get(this._url).map(res=>res.json());
    }

    getComments(id){
        var url = this._url + "/" + id + "/comments";
        return this._http.get(url).map(res=>res.json());
    }

}