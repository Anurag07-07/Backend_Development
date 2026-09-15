import type { NextFunction, Request, Response } from "express";
import type { AnyZodObject } from "zod/v3";

/**
 * 
 * @param schema - Zod schema to validate the request body
 * @returns  - Middleware function to validate the request body
 */
export const validationBody=(schema:AnyZodObject)=>{
  return async (req:Request,res:Response,next:NextFunction)=>{
  try {
      schema.parseAsync(req.body)
      console.log(`Request body is valid`);
      
  } catch (error) {
    //If Validation Fails
    res.status(400).json({
      message:`Invalid Request Body`,
      status:false,
      error:error
    })
  }
  }
}

export const validationQuery=(schema:AnyZodObject)=>{
  return async (req:Request,res:Response,next:NextFunction)=>{
  try {
      schema.parseAsync(req.query)
      console.log(`Query Params is valid`);
      
  } catch (error) {
    //If Validation Fails
    res.status(400).json({
      message:`Invalid query Params`,
      status:false,
      error:error
    })
  }
  }
}