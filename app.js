import path from 'path';
import express from 'express'
import * as index from "./src/module/index_router.js"
import { fileURLToPath } from 'url';
import dotenv from "dotenv";
import connectDB from './DB/connection.js';
const __dirname=path.dirname(fileURLToPath(import.meta.url))
dotenv.config({path:path.join(__dirname,"./config/.env")})
const app = express()
const port = 3000

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"./views/utils")))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/auth",index.authRouter)
app.use("/product",index.productRouter)
app.use("/user",index.userRouter)
app.use(`*`,(req,res)=>{
    res.send("404 page not found")
})
connectDB()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
