import express from 'express';
import {  validateRequestBody } from '../../validators';
import { createHotelHandler,getHotelByIdHandler } from '../../controllers/hotel.controller';
import { hotelSchema } from '../../validators/hotel.validator';

const hotelRouter = express.Router();

hotelRouter.post('/', validateRequestBody(hotelSchema), createHotelHandler); // TODO: Resolve this TS compilation issue
hotelRouter.get('/:id', getHotelByIdHandler); // TODO: Resolve this TS compilation issue

hotelRouter.get('/health', (req, res) => {
    res.status(200).send('OK');
});

export default hotelRouter;