const fs = require("fs");
const path = require("path");

function isImageFile(fileName) {
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "svg"]; // Add more extensions if needed

  // Get the file extension from the fileName
  const fileExtension = fileName.split(".").pop().toLowerCase();

  // Check if the file extension is in the list of image extensions
  return imageExtensions.includes(fileExtension);
}

fs.cpSync(
  path.join(process.cwd(), "src"),
  path.join(process.cwd(), "uicomponents", "src"),
  {
    filter: (file) => (file.includes("__") ? false : true),
    recursive: true,
  }
);
fs.cpSync(
  path.join(process.cwd(), "public"),
  path.join(process.cwd(), "uicomponents", "public"),
  { recursive: true, filter: (file) => isImageFile(file) }
);
