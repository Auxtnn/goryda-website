// pages/api/[...path].js
import Cors from 'cors';
import { NextResponse } from 'next/server';

const corsOptions = {
  origin: '*', // Replace this with your actual frontend origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
};

const corsMiddleware = Cors(corsOptions);

export async function GET (request) {

  // corsMiddleware(request);

  if (request.method === 'OPTIONS') {
    // res.status(200).end();
    return;
  }

  // Perform API key validation here
  // const apiKey = request.headers['x-api-key'];
  // console.log(request.headers)

  // if (!apiKey || apiKey !== 'abc12345') {
  //   return NextResponse.json({ error: 'Unauthorized', status: 401 })
  // }

  // Your API logic here...
  if (request.method === 'GET') {
    return NextResponse.json({ message: 'Hello', status: 200 });
  } else {
    return NextResponse.json({ error: 'Method Not Allowed', status: 405 });
  }
};


