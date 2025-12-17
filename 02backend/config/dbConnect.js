import mongoose from "mongoose";
import React from "react";

const dbConnect = () => {
  mongoose
    .connect(
      "mongodb+srv://rkpandey1421_db_user:2izMQ3KKGCYO6HbC@myfirstpro.znwrlk5.mongodb.net/formdetails"
    )
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log("Database connection failed", err);
    });
};

export default dbConnect;
