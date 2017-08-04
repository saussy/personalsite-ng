import { Component, OnInit } from '@angular/core';

import { PostService } from './post.service';

@Component({
    moduleId: module.id,
    selector: 'post-list',
    templateUrl: 'postlist.component.html',
    styleUrls: ['./postlist.component.css']
})
export class PostListComponent implements OnInit {
    posts: any[];

    constructor(
        private postService: PostService
    ) { }

    ngOnInit() {
        this.postService.getAll()
        .subscribe(
            (res) => {
                console.log(res);
                this.posts = res;
            }
        );
     }
}