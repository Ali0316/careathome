import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    // await mongoose.connect(
    //   `mongodb+srv://mralinasir40:43Uzi27wFQ40gK5c@cluster0.q8xbpac.mongodb.net/care?retryWrites=true&w=majority&appName=Cluster0`
    // );
    await mongoose.connect(`mongodb://localhost:27017/careathome`);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB;
