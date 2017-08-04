import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Project, ProjectService } from './project.service';

@Component({
    selector: 'project',
    templateUrl: 'project.component.html'
})
export class ProjectComponent implements OnInit {

    @Input() project: Project;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private projectService: ProjectService
    ) { }

    ngOnInit() { 
        this.route.paramMap
        .switchMap((params: ParamMap) => 
            this.projectService.getProject(params.get('id')))
        .subscribe((res) => {
            this.project = res;
        });
    }
}