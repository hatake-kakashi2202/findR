import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
dotenv.config()
const app = express()
connectDB()
app.get('/', (req,res) => {
    res.send('API is running....')
})

app.get('/api/roommates', (req,res) => {
    
})
const PORT = process.env.PORT || 5000
 console.log(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold))
