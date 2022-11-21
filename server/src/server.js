import http from 'http'
import app from './app.js'
import connectDB from '../services/mongo.js'

const PORT = process.env.PORT || 5000
const server = http.createServer(app)

const startServer = () =>{
  server.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
    connectDB()
  })
}

startServer()