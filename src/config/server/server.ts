import * as express from 'express';
import * as Middleware from '@/config/middleware/middleware';
import * as Routes from '@/routes';
import * as path from "path";
import bodyParser = require('body-parser');
/**
 * @constant {express.Application}
 */
const app: express.Application = express();

/**
 * @constructs express.Application Middleware
 */
Middleware.configure(app);

/**
 * @constructs express.Application Routes
 */
Routes.init(app);

/**
 * @constructs express.Application Error Handler
 */
Middleware.initErrorHandler(app);

/**
 * sets port 3000 to default or unless otherwise specified in the environment
 */
app.set('port', process.env.PORT || 3000);

/**
 * sets secret to 'superSecret', otherwise specified in the environment
 */
app.set('secret', process.env.SECRET || 'vehicle');
app.use(bodyParser.json()); 
// app.use(express.static(path.join(__dirname, "../uploads"), {maxAge: 31557600000}));
 // Add headers
// headers and content type
app.use((req, res, next) => {
    // Website you wish to allow to connect
    
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type,Authorization");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

/**
 * @exports {express.Application}
 */
export default app;
