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
export class TitleService {
private API_URL: string = `/api/title`;
private API_RANDOM_URL: string = `/api/randomTitle`;

    constructor(
        private http: Http
    ) { }

    getRandomTitle(): Promise<Title> {
      return this.http.get(`${this.API_RANDOM_URL}`)
      .toPromise()
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        
      });
    }
    getAll(): Observable<Title[]> {
        return this.http.get(this.API_URL)
        .map((res) => {
            return res.json();
        });
    }

    getPost(titleId: string): Promise<Title> {
        return this.http.get(`${this.API_URL}/${titleId}`)
        .toPromise()
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
        });
    }
}

export class Title {
    title_id: string;
    title: string;
}