import { Injectable } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

@Injectable()
export class PostService {

    private API_URL: string = `/api/v1/posts`;

    constructor(
        private http: Http
    ) { }

    getAll(): Observable<Post[]> {
        return this.http.get(this.API_URL)
        .map((res) => {
            return res.json();
        });
    }

    getPost(postId: string): Promise<Post> {
        return this.http.get(`${this.API_URL}/${postId}`)
        .toPromise()
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
        });
    }
}

export class Post {
    post_id: string;
    post_title: string;
    post_body: string;
}