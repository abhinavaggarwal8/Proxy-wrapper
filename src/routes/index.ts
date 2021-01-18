import * as express from 'express';
// import * as http from 'http';
// import * as jwtConfig from '@/config/middleware/jwtAuth';
// import AuthRouter from './AuthRouter';
import MyRouter from './MyRouter';

// type NextFunction = express.NextFunction;
// type Request = express.Request;
// type Response = express.Response;


/**
 * @export
 * @param {express.Application} app
 */
export function init(app: express.Application): void {
    // const router: express.Router = express.Router();
   // app.use("/", router);
    /**
     * @description
     *  Forwards any requests to the /v1/ URI to our Router
     *  Also, check if user authenticated
     * @constructs
     */
    // app.use('/v1', jwtConfig.isAuthenticated, MyRouter);
    app.use('/v1',  MyRouter);


    /**
     * @description Forwards any requests to the /auth URI to our AuthRouter
     * @constructs
     */
    // app.use('/auth', AuthRouter);

    /**
     * @description No results returned mean the object is not found
     * @constructs
     */
    // app.use((req: Request, res: Response, next: NextFunction) => {
    //     res.status(404).send(http.STATUS_CODES[404]);
    // });

    /**
     * @constructs all routes
     */
    // app.use(router);
}

