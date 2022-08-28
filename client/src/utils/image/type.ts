import FileType from "file-type";
/**
 *
 * @param filepath The path to target file
 * @returns A Promise conforming to FileType.FileTypeResult
 */
export const getType = async (
  filepath: string
): Promise<FileType.FileTypeResult> => await FileType.fromFile(filepath);

export default getType;
