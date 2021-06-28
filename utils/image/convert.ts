const convert = require("heic-convert");
import getType from "./type";
import { promises as fs } from "fs";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

export const SUPPORTED_CONVERSIONS = {
  "image/heic": "image/jpg",
};

export const heic2Jpeg = async (heicpath) => {
  const format = "JPEG";

  const iBuf = await fs.readFile(heicpath);
  // console.log("iBuf", iBuf);
  const oBuf: Buffer = await convert({
    buffer: iBuf,
    format,
    quality: 1,
  });

  const opath = `./data/processed/upload_${Date.now()}${uuidv4()}.${format}`;

  await fs.writeFile(opath, oBuf);
  return opath;
};

const mime2Funcs = {
  "image/heic-image/jpg": heic2Jpeg,
};

/**
 *
 * @param param0 - {
 *  from:
 *  to:
 *  path:
 * }
 *
 * @returns string representing new path or undefined
 *
 *
 */
const convertImage = async ({ from, to, path }) => {
  const func = mime2Funcs[`${from}-${to}`];

  if (func == null) return undefined;
  return await func(path);
};

export default convertImage;
