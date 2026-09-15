import type { NextFunction, Request, Response } from "express";
import { InternalServerError } from "../utils/errors/app.error.js";
import fs from 'fs/promises'

export const pingHandler = async(req:Request,res:Response,next:NextFunction)=>{
  try {
    await fs.readFile("sample")
    res.status(200).json({message:`Pong`})    
  } catch (error) {
    throw new InternalServerError("Something Went Wrong!!!")
  }
}

export const systemHealth = (req:Request,res:Response)=>{
  res.send("System is Working Fine!!")
}