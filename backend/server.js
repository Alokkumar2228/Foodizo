import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"
import userRouter from "./routes/userRoutes.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoutes.js"
import orderRouter from "./routes/orderRoutes.js"
import resetRouter from "./routes/resetPassRoute.js"
import adminRouter from "./routes/adminRoutes.js"
import resetPasswordRouter from "./routes/adminPasswordRecovery.js"




//app config
const app = express()
const port = process.env.PORT || 4000
//using cosrs you can access backend from any frontend
app.use(cors()) 
app.use(express.urlencoded({extended:true}))
//middleware
app.use(express.json())
//db connection
connectDB();




// api endpoints
app.use("/api/food",foodRouter)
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.use("/api/reset",resetRouter)
app.use("/api/admin",adminRouter)
app.use("/api/admin/reset",resetPasswordRouter)


 //using this middleware  whenever we get request from frontend to backend that will we parse using this json
// using this we can access backend from any frontend

app.get("/",(req,res)=>{
    res.send("API WORKING")
})


app.listen(port,()=>{
    console.log(`server started on http://localhost${port}`)
})

