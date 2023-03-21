import { attachControllers } from "@decorators/express";
import express from "express";
import { User } from "./controllers/User/User.controller";

const routes = express.Router();

attachControllers(routes, [User]);

export { routes };