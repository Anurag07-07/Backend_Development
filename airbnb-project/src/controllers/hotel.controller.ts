import { NextFunction, Request, Response } from "express";
import { createHotelService, getHotelByIdService } from "../services/hotel.service";
import {StatusCodes} from 'http-status-codes'
export async function createHotelHandler(req:Request,res:Response,next:NextFunction) {
  const hotelResponse = await createHotelService(req.body)

  res.status(StatusCodes.CREATED).json({
    message:`Hotel Created Succesfully`,
    data:hotelResponse,
    success:true
  })
}

export async function getHotelByIdHandler(req:Request,res:Response,next:NextFunction) {
  const hotelResponse = await getHotelByIdService(Number(req.params.id))

  res.status(StatusCodes.OK).json({
    message:`Hotel found Successfully`,
    data:hotelResponse,
    success:true
  })
}



export async function getAllHotelHandler(req:Request,res:Response,next:NextFunction) {
  res.status(StatusCodes.NOT_IMPLEMENTED);
}