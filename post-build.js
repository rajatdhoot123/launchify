const fs = require("fs");
const path = require("path");

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
  {
    recursive: true,
    filter: (file, type, d) => {
      if (
        file.includes("__") ||
        file.endsWith(".xml") ||
        file.endsWith(".txt")
      ) {
        return false;
      }
      return true;
    },
  }
);
