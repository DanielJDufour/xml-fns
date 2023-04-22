import findTagByPath from "xml-utils/find-tag-by-path.js";

export default function findTagText(xml, path) {
  if (typeof path === "string") path = [path];
  const tag = findTagByPath(xml, path);
  if (!tag) return undefined;
  const inner = tag.inner;
  if (typeof inner !== "string") return undefined;
  const text = inner.trim();
  return text;
}
