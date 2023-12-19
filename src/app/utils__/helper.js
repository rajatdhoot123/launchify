export function prettifyCamelCase(str) {
  var output = "";
  var len = str.length;
  var char;

  for (var i = 0; i < len; i++) {
    char = str.charAt(i);

    if (i == 0) {
      output += char.toUpperCase();
    } else if (char !== char.toLowerCase() && char === char.toUpperCase()) {
      output += " " + char;
    } else if (char == "-" || char == "_") {
      output += " ";
    } else {
      output += char;
    }
  }

  return output;
}

export function removeBackticksAndJSX(inputString) {
  return inputString.replace(/```jsx/g, "").replace(/```/g, "");
}

export function formatComponentPath(inputPath) {
  // Split the path using '/'
  const pathParts = inputPath.split("/");

  // Get the last part of the path (filename)
  const filename = pathParts.pop();

  // Check if the filename contains a dash

  if (filename.includes("-")) {
    // Replace the last part with 'index.jsx'
    pathParts.push("index.jsx");
  }

  // Join the path parts back together
  const formattedPath = pathParts.join("/");

  return formattedPath;
}
