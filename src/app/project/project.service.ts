import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

@Injectable()
export class ProjectService {

    constructor() { }

    getProjects(): Observable<Project[]> {
        return Observable.of(PROJECTS);
    }
}

export class Project {
    project_title: string;
    project_id: string;
    project_category: string;
}

const PROJECTS = [
    {
        'project_title': 'Yew Bow',
        'project_id': '1',
        'project_category': 'bow'
    },
    {
        'project_title': 'Headphone Multiplexor',
        'project_id': '2',
        'project_category': 'audio'
    },
    {
        'project_title': 'Personal Website',
        'project_id': '3',
        'project_category': 'web'
    },
    {
        'project_title': 'Recurve Bow',
        'project_id': '4',
        'project_category': 'bow'
    },
    {
        'project_title': 'Headphone Multiplexor mk 2',
        'project_id': '5',
        'project_category': 'audio'
    },
    {
        'project_title': 'Personal Website',
        'project_id': '6',
        'project_category': 'web'
    }
];