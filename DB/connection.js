import mongoose from "mongoose";

export const connectDB = () => {
    return mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
};
