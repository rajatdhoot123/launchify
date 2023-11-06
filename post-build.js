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
