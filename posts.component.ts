import {Component, OnInit} from 'angular2/core';
import {PostService} from './post.service';
import {SpinnerComponent} from './spinner.component';

@Component({
    templateUrl: 'app/post.component.html',
    providers :[PostService],
    directives : [SpinnerComponent]
})

export class PostsComponent implements OnInit{
  posts;   
 isLoading = true; 
    constructor(private _postService : PostService){
    }

    ngOnInit(){
         this._postService.getPosts().subscribe(post => this.posts = post, null, ()=>{this.isLoading = false;});        
    }

}