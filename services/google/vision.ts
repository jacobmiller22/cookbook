import axios from "axios";
import vision from "@google-cloud/vision";

export const annotate = async (filepath) => {
  const client = new vision.ImageAnnotatorClient();

  const [result] = await client.textDetection(filepath);
  const detections = result.textAnnotations;
  console.log("Text:");
  detections.forEach((text) => console.log(text));
};
