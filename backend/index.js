import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";




const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));

const PORT =  3000;


// api's       
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/company", companyRoute);
// app.use("/api/v1/job", jobRoute);
// app.use("/api/v1/application", applicationRoute);



app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);

    
})