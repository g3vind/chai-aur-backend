import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`\n MONGODB CONNECTED....`);
  } catch (error) {
    console.error("MONGODB CONNECTION ERROR:" + error);
    process.exit(1);
  }
};

export default connectDB;
