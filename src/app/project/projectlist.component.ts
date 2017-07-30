import { Component, OnInit } from '@angular/core';

import { ProjectService } from './project.service';
import { ProjectThumbComponent } from './projectthumb.component';

@Component({
    moduleId: module.id,
    selector: 'project-list',
    templateUrl: 'projectlist.component.html',
    styleUrls: ['projectlist.component.css']
})
export class ProjectListComponent implements OnInit {

    projects: any[];

    constructor(
        private projectService: ProjectService
    ) { }

    ngOnInit() { 
        this.projectService.getProjects().subscribe(res => {
            this.projects = res;
        })
    }
}