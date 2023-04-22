import findTagByPath from "xml-utils/find-tag-by-path.js";

export default function hasAllTags(xml, paths) {
  for (let i = 0; i < paths.length; i++) {
    let path = paths[i];
    if (typeof path === "string") path = [path];
    const tag = findTagByPath(xml, path);
    if (!tag) {
      return false;
    }
  }
  return true;
}
