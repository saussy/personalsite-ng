import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import ProjectRouter from './Routes/Projects';
import PostRouter from './Routes/Posts';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }

    private routes(): void {
        let router = express.Router();
        this.express.use('/api/v1/projects', ProjectRouter);
        this.express.use('/api/v1/posts', PostRouter);
    }
}

export default new App().express;