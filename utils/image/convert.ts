const convert = require("heic-convert");
import getType from "./type";
import { promises as fs } from "fs";
import { v4 as uuidv4 } from "uuid";

export const heic2Jpeg = async (heicpath) => {
  const format = "JPEG";

  console.log("path\n\n\n\n", heicpath);

  const iBuf = await fs.readFile(heicpath);
  console.log("iBuf", iBuf);
  const oBuf: Buffer = await convert({
    buffer: iBuf,
    format,
    quality: 1,
  });

  const oFilename = `upload_${Date.now()}${uuidv4()}.${format}`;

  await fs.writeFile(`./data/processed/${oFilename}`, oBuf);
  return oFilename;
};
