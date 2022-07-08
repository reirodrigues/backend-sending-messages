import { Router } from 'express';
import * as MessageController from './controllers/message.js';

const routes = Router();

routes.get('/', (request, response) => {
  response.send('Up')
});

routes.post('/message', MessageController.message)

export default routes;
