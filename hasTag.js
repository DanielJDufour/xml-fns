import findTagByPath from "xml-utils/find-tag-by-path.js";

export default function hasTag(xml, nameOrPath, options) {
  if (typeof nameOrPath === "string") nameOrPath = [nameOrPath];
  const tag = findTagByPath(xml, nameOrPath, options || {});
  return typeof tag === "object";
}
