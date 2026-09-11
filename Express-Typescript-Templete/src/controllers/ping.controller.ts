import type { Request, Response } from "express";

export const pingHandler = (req:Request,res:Response)=>{
  res.send("Pong")
}

export const systemHealth = (req:Request,res:Response)=>{
  res.send("System is Working Fine!!")
}