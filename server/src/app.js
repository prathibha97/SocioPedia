import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import path from 'path'
import {fileURLToPath} from 'url'
import api from './routes/api.js'

// configs
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()

const app = express()

app.use(express.json())
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "default-src": ["'self'"],
      "script-src": ["'self'", "'unsafe-inline'"],
      "style-src": ["'self'", "'unsafe-inline'", "fonts.googleapis.com"],
      "frame-src": ["'self'", ],
      "font-src": [
        "'self'",
        "fonts.googleapis.com",
        "fonts.gstatic.com",
        "res.cloudinary.com/",
      ],
      "img-src": ["'self'", "data:", "https://res.cloudinary.com"],
    },
    reportOnly: true,
  })
);
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}))
app.use(morgan('common'))
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

app.use('/api', api)

app.use('/assets', express.static(path.join(__dirname, '/public/assets')))
app.use(express.static(path.join(__dirname, "..", "..", "client", "build")))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "build", "index.html"))
})

export default app

