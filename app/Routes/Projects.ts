import {Router, Request, Response, NextFunction} from 'express';
import * as mongodb from 'mongodb';
import * as assert from 'assert';

export class ProjectRouter {
    public router: Router;
    private MongoUrl = 'mongodb://localhost:27017/personalsite';
    private MongoClient = mongodb.MongoClient;
    private db;

    constructor() {
        this.router = Router();
        this.init();
    }

    init(): void {
        this.router.get('/', this.getAll);
        this.router.get('/:projectId', this.getOne);
        this.MongoClient.connect(this.MongoUrl, (err, db) => {
            this.db = db;
        });
    }

    public getAll = (req: Request, res: Response, next: NextFunction) => {
        this.db.collection('projects').find({}).toArray((err, docs) => {
            res.send(docs);
        });
    }

    public getOne = (req: Request, res: Response, next: NextFunction) => {
        let index = String(req.params.projectId);
        this.db.collection('projects').find({'project_id': index}).toArray( (err, doc) =>{
            res.send(doc[0]);
        });
    }
}

const projectRoutes = new ProjectRouter();
projectRoutes.init();

export default projectRoutes.router;