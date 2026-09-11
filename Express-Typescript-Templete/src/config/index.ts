import dotenv from 'dotenv'

interface ServerConfig{
  PORT:number
}

function loadEnv(){
  dotenv.config()
  console.log(`Environment Variables Loaded`);
}

loadEnv();

export const serverConfig:ServerConfig = {
  PORT:Number(process.env.PORT) || 8000  
}