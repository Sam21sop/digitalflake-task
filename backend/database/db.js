import mongoose from "mongoose";
import configEnvVar from "../utils/configEnvVar.js";


const DB_BASE_URL = configEnvVar.DB_URL;
const DATABASE_NAME = configEnvVar.DB_NAME;

const connectToDB = async () => {
    try {
        const conne = await mongoose.connect(`${DB_BASE_URL}/${DATABASE_NAME}`); // local connection
        console.log(`MongoDB connected: ${conne.connection.host}`);
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};


export default connectToDB;