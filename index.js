const express  = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB Connection is Sucessfull")).catch((err)=>{
    console.log(err);
});

// middleware
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());

app.use("/api/auth/", authRoute);
app.use("/api/users/",userRoute);


app.listen(8800, ()=>{
    console.log("Backend server is running ...");
})
