import { Router } from "express";

import {
  UserComponent,
} from "@/components";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 *
 *
 *! Users routes
 *
 *
 */
router.post("/user/login", UserComponent.login);


/**
 * @export {express.Router}
 */
export default router;
