import axios from "axios";
import dotenv from "dotenv";
import data from "./data/data.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const uploadSource = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.API_URL}/api/sources`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(`uploaded successfully.`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const importData = async () => {
  try {
    for (let i = 0; i < data.length; i++) {
      const source = data[i];
      await uploadSource(data);
    }

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`Error importing data: ${error}`);
    process.exit(1);
  }
};

importData();
