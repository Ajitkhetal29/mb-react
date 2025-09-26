import { createProject, getAllProjects } from '../controllers/Project.js';
import { upload } from '../config/multer.js';

import express from 'express';

const projectRouter = express.Router();

projectRouter.post(
    "/addProject",
    upload.fields([
        { name: "gallery", maxCount: 20 },
        { name: "layoutImages", maxCount: 50 },
    ]),
    createProject
);

projectRouter.get('/allProjects', getAllProjects)
export default projectRouter;