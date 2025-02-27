import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file) => {
  if (!file) {
    throw new Error("No file provided");
  }
  const parser = new DataUriParser();
  const extension = path.extname(file.originalname).toString();
  const dataUri = parser.format(extension, file.buffer);

  return dataUri; // Ensure it returns { content: "data:image/png;base64,..." }
};

export default getDataUri;
