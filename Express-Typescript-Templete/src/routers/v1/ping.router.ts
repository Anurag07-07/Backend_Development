import express from "express";
import { pingHandler, systemHealth } from "../../controllers/ping.controller.js";
const pingRouter = express.Router()

pingRouter.get('/',pingHandler)

pingRouter.get('/health',systemHealth)

export default pingRouter