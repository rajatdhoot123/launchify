const fs = require("fs");

const IGNORE_FILES = [
  "src/app/components/select",
  "src/app/components/floater",
];

fs.cpSync("src/app/components", "uicomponents/src/app/components", {
  filter: (file) => (IGNORE_FILES.includes(file) ? false : true),
  recursive: true,
});
