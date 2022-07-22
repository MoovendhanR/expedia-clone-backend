require('dotenv').config({ path: '../.env' });
const cors = require('cors');

const express = require('express');
const app = express();
const connect = require('./Config/db');


//routes
const hotelController = require('./Controllers/Hotel.Controllers');
const userController=require('./Controllers/User.Controllers')
const paymentController=require("./Controllers/Payment.Controllers");

app.use(express.json());
app.use(cors());



app.use("/hotel",hotelController);
app.use("/user",userController);
app.use("/payment",paymentController);





const PORT_CONNECT= process.env.PORT;
app.listen(PORT_CONNECT, async () => {
  try {
    await connect();
    console.log(`listning on port ${PORT_CONNECT}`);
  } catch (error) {
    console.log(error.message);
  }
});