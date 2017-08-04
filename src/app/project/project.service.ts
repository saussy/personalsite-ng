import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
 

@Injectable()
export class ProjectService {

    private API_URL: string = `/api/v1/projects`;

    constructor(private http: Http) {
    }

    getProjects(): Observable<Project[]> {
        return this.http.get(this.API_URL)
        .map( res => {
            return res.json() as Project[];
        })
        .do(res => {
            return res;
        });
    }

    getProject(projectId: string): Promise<Project> {
        return this.http.get(`${this.API_URL}/${projectId}`)
        .toPromise()
        .then(
            res => {
                let ret = res.json() as Project;
                return ret;
            }
        ).catch(() => {});
    }
}

export class Project {
    project_title: string;
    project_id: string;
    project_category: string;
}