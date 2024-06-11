const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

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

//  testing area
// const gaRequest = require("./mappers/gaRequest");

// console.log(gaRequest({ dimensions: ["age", "name"], metrics: ["location","fggf"], dateRanges:[[1,2],["sgdf","sdfgf"]] }));
// 


app.listen(port,() => {
    console.log(`server is running in the port :${port}`);
});
