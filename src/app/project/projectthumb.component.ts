import { Component, OnInit, Input } from '@angular/core';

import { Project } from './project.service';

@Component({
    moduleId: module.id,
    selector: 'project-thumb',
    templateUrl: 'projectthumb.component.html',
    styleUrls: ['./projectthumb.component.css']
})
export class ProjectThumbComponent implements OnInit {

    @Input() project: Project;
    
    constructor() { }

    ngOnInit() { }
}