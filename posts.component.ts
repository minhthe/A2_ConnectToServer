import {Component, OnInit} from 'angular2/core';
import {PostService} from './post.service';
import {SpinnerComponent} from './spinner.component';

@Component({
    templateUrl: 'app/post.component.html',
    providers: [PostService],
    directives: [SpinnerComponent],
    styles: [`
         .posts li { cursor: default; }
         .posts li:hover { background: #ecf0f1; } 
         .list-group-item.active, 
         .list-group-item.active:hover, 
         .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50; 
                }
    `]
})

export class PostsComponent implements OnInit {
    posts;
    postsLoading = true;
    currentPost;
    comments;
    commentsLoading ;
    constructor(private _postService: PostService) {
    }

    ngOnInit() {
        this._postService.getPosts().subscribe(post => this.posts = post, null, () => { this.postsLoading = false; });
    }

    select(post) {
        this.commentsLoading = true;
        
        this.currentPost = post;
        this._postService.getComments(post.id).subscribe(comments => this.comments = comments, null, () => { this.commentsLoading = false; });

    }

    //requiremnet :
    //when select one post. it will get current post -> show page post.component.html
    // and in addition it will be also show the comment of one post
    //with the struture image, id. content 
}