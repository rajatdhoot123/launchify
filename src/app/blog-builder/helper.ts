import slugify from "slugify";
export function extractSlugFromJson(jsonData) {
  // Parse the JSON if it's a string
  const data = typeof jsonData === "string" ? JSON.parse(jsonData) : jsonData;

  // Find the first heading of level 2 (assuming this is the title)
  const titleObject = data.find(
    (item) =>
      item.type === "heading" &&
      item.attrs &&
      item.attrs.level === 2 &&
      item.content &&
      item.content[0] &&
      item.content[0].type === "text"
  );

  if (!titleObject) {
    return null; // or a default slug if you prefer
  }

  // Extract the text from the title
  const title = titleObject.content[0].text;

  // Convert the title to a slug
  return slugify(title, { lower: true });
}
