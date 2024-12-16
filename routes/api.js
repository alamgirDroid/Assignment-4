import express from "express";
const router = express.Router();
import * as UsersController from "../app/controllers/UsersController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";



// Users
router.post("/Registration",UsersController.Registration)
router.post("/Login",UsersController.Login)
router.post("/SingleProfileRead",AuthMiddleware,UsersController.SingleProfileRead)
router.get("/AllProfileRead",AuthMiddleware,UsersController.AllProfileRead)
router.post("/ProfileUpdate",AuthMiddleware,UsersController.ProfileUpdate)
router.post("/ProfileDelete/:id",AuthMiddleware,UsersController.ProfileDelete)



export default router;