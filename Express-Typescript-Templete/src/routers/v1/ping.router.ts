import express from "express";
import { pingHandler, systemHealth } from "../../controllers/ping.controller.js";
import { validationBody } from "../../validation/index.js";
import { pingSchema } from "../../validation/ping.validator.js";
const pingRouter = express.Router()

pingRouter.get('/',validationBody(pingSchema as any),pingHandler)

pingRouter.get('/health',systemHealth)

export default pingRouter