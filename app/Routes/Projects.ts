import {Router, Request, Response, NextFunction} from 'express';

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

export class ProjectRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init(): void {
        this.router.get('/', this.getAll);
        this.router.get('/:projectId', this.getOne)
    }

    public getAll(req: Request, res: Response, next: NextFunction): void {
        res.send(PROJECTS);
    }

    public getOne(req: Request, res: Response, next: NextFunction): void {
        let index = Number(req.params.projectId);
        res.send(PROJECTS[index]);
    }
}

const projectRoutes = new ProjectRouter();
projectRoutes.init();

export default projectRoutes.router;