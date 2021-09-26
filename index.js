import express from 'express'
import config from './config.js'
import path from 'path'

const PORT = process.env.PORT || config.serverPORT
const __dirname = path.resolve();


const app = express()
app.use(express.static(__dirname))

function StartApp(){
    try {
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

StartApp()