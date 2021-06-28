import axios from "axios";
import vision from "@google-cloud/vision";

export const annotate = async (filepath) => {
  // Check the file that was given to make sure it is of the correct type

  const client = new vision.ImageAnnotatorClient({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    },
  });

  // client.
  const [result] = await client.documentTextDetection(filepath);
  const detections = result.textAnnotations;
  console.log("Text:");
  detections.forEach((text) => console.log(text));
  // console.log(result);
};
