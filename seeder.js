import axios from "axios";
import dotenv from "dotenv";
import data from "./data/data.js";
import connectDB from "./config/dbConfig.js";
import imagekit from "./config/imageKitConfing.js";
import fs from "fs/promises";
import path from "path";

dotenv.config();
connectDB();

const verifyImageKitCredentials = async () => {
  try {
    console.log("Verifying ImageKit credentials...");
    const authParams = imagekit.getAuthenticationParameters();
    if (!authParams.token || !authParams.signature) {
      throw new Error("Invalid ImageKit credentials");
    }
    console.log("ImageKit credentials verified successfully.");
    return true;
  } catch (error) {
    console.error("ImageKit Authentication Error:", error.message);
    return false;
  }
};

const uploadImageToImageKit = async (imagePath) => {
  try {
    const fileName = path.basename(imagePath);
    const imageBuffer = await fs.readFile(imagePath);

    const uploadResponse = await imagekit.upload({
      file: imageBuffer,
      fileName: fileName,
      folder: "/toolkit-sources",
    });

    if (!uploadResponse || !uploadResponse.url) {
      throw new Error("Invalid upload response from ImageKit");
    }

    console.log(`Successfully uploaded image: ${fileName}`);
    return uploadResponse.url;
  } catch (error) {
    console.error(
      `Error uploading image ${imagePath} to ImageKit:`,
      error.message
    );
    if (error.message.includes("cannot be authenticated")) {
      console.error("Please check your ImageKit credentials in the .env file:");
      console.error(
        "IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY, and IMAGEKIT_URL_ENDPOINT"
      );
    }
    return "";
  }
};

const processSource = async (source) => {
  // Clone the source to avoid modifying the original data
  const processedSource = { ...source };

  // Upload image to ImageKit if exists
  if (processedSource.image) {
    const imagePath = path.join(process.cwd(), processedSource.image);
    try {
      const imageUrl = await uploadImageToImageKit(imagePath);
      if (!imageUrl) {
        console.log(
          `Skipping image upload for ${source.name} - using original path`
        );
      } else {
        processedSource.image = imageUrl;
      }
    } catch (error) {
      console.error(
        `Failed to process image for ${source.name}:`,
        error.message
      );
      processedSource.image = ""; // Set empty if upload fails
    }
  }

  // Fix specific data issues
  if (processedSource.name === "Brad Fetch") {
    processedSource.name = "Brandfetch";
  }

  if (
    processedSource.name === "Boring Cash Cow" &&
    processedSource.description.endsWith("7000 founder")
  ) {
    processedSource.description += "s";
  }

  return processedSource;
};

const uploadSource = async (data) => {
  try {
    const processedData = await processSource(data);
    const response = await axios.post(
      `${process.env.API_URL}/api/sources`,
      processedData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(`Uploaded ${processedData.name} successfully.`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`Error uploading ${data.name}:`, error.response.data);
    } else {
      console.error(`Error uploading ${data.name}:`, error.message);
    }
    throw error;
  }
};

const importData = async () => {
  try {
    // Verify ImageKit credentials first
    const isImageKitVerified = await verifyImageKitCredentials();
    if (!isImageKitVerified) {
      console.error(
        "ImageKit verification failed. Please check your credentials."
      );
      process.exit(1);
    }

    for (const source of data) {
      try {
        await uploadSource(source);
      } catch (error) {
        console.error(
          `Failed to import ${source.name}, continuing with next source...`
        );
      }
    }

    console.log("Data import completed!");
    process.exit();
  } catch (error) {
    console.error(`Error in import process: ${error}`);
    process.exit(1);
  }
};

importData();
