const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = 8000;

app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
// routers
const AnalyticsRouter = require("./routers/AnalyticsRouter/router");
app.use("/analytics",AnalyticsRouter);
// 

// test get router
app.use('/',(req,res)=>{
    res.send('Hello');
})
//

app.listen(port,() => {
    console.log(`server is running in the port :${port}`);
});
