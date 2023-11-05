const fs = require("fs");

fs.cpSync("src/app/components", "uicomponents/src/app/components", {
  recursive: true,
});
