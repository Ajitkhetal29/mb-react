import login from "../controllers/admin.js";

import express from 'express';

const adminRouter = express.Router();

adminRouter.post('/login',login)

export default adminRouter;