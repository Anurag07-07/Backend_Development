import express from 'express'
import { serverConfig } from './config/index.js';
import { pingHandler } from './controllers/ping.controller.js';
import v1Router from './routers/v1/index.router.js';
import v2Router from './routers/v2/index.router.js';

const app = express();
app.use(express.json())

app.get('/api/v1',v1Router)
app.get('/api/v2',v2Router)

app.listen(serverConfig.PORT,()=>{
  console.log(`Server Running at http://localhost:${serverConfig.PORT}`);
  console.log(`To Stop the Server Press CTRL+C`);
})
