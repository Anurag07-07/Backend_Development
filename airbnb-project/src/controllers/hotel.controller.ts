import { NextFunction, Request, Response } from "express";
import { createHotelService, deleteHotelService, getAllHotelsService, getHotelByIdService } from "../services/hotel.service";
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
  
  //Call the Service Layer
  const hotelResponse = await getAllHotelsService();

  //Send the Response
  res.status(StatusCodes.OK).json({
    message:`Hotels found successfully`,
    data:hotelResponse,
    success:true
  })

  res.status(StatusCodes.NOT_IMPLEMENTED);
}

export async function deleteHotelHandler(req:Request,res:Response,next:NextFunction) {
  
  //Call the Service Layer
  const hotelResponse = await deleteHotelService(Number(req.params.id));

  //Send the Response
  res.status(StatusCodes.OK).json({
    message:`Hotel Deleted successfully`,
    data:hotelResponse,
    success:true
  })

}