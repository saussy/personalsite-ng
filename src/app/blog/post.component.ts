import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Post, PostService } from './post.service';

@Component({
    moduleId: module.id,
    selector: 'post',
    templateUrl: 'post.component.html'
})
export class PostComponent implements OnInit {

    @Input() post: Post;

    constructor( 
        private route: ActivatedRoute,
        private router: Router,
        private postService: PostService
    ) {}
    
    ngOnInit() {
        this.route.paramMap
        .switchMap((params: ParamMap) => 
            this.postService.getPost(params.get('id')))
        .subscribe((res) => {
            this.post = res;
        });
    }
}