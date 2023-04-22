import test from "flug";
// import findMultiple from "./findMultiple.js";
// import findTagDate from "./findTagDate.js";
import findTagText from "./findTagText.js";
import hasTag from "./hasTag.js";
import hasAllTags from "./hasAllTags.js";

// test("findMultiple", ({ eq }) => {
//   const xml = `<channel><pubDate>Thu, 27 Dec 2007 23:56:15 PST</pubDate></channel>`;
//   eq(findMultiple(xml, ["channel", "feed"]), [
//     {
//       inner: "<pubDate>Thu, 27 Dec 2007 23:56:15 PST</pubDate>",
//       outer: "<channel><pubDate>Thu, 27 Dec 2007 23:56:15 PST</pubDate></channel>",
//       start: 0,
//       end: 67
//     }
//   ]);
// });

// test("findTagDate", ({ eq }) => {
//   const xml = `<channel><pubDate>Thu, 27 Dec 2007 23:56:15 PST</pubDate></channel>`;
//   eq(findTagDate(xml, "pubDate").toISOString(), "2007-12-28T07:56:15.000Z");
//   eq(findTagDate(xml, "pubDate", { raw: true }), "Thu, 27 Dec 2007 23:56:15 PST");
// });

test("findTagText", ({ eq }) => {
  const xml = `<author> <name>\nDr. Thaddeus Remor\n</name> <email>\ntremor@quakelab.edu\n</email> </author>`;
  eq(findTagText(xml, "name"), "Dr. Thaddeus Remor");
});

test("hasTag", ({ eq }) => {
  const xml = "<entry><georss:point>45.256 -71.92</georss:point></entry>";
  eq(hasTag(xml, "georss:point"), true);
  eq(hasTag(xml, ["geo:lat", "geo:long"]), false);
  eq(
    hasTag(xml, [
      ["item", "geo:lat"],
      ["item", "geo:long"]
    ]),
    false
  );
});

test("hasAllTags", ({ eq }) => {
  const xml = "<item><geo:lat>5.5319</geo:lat><geo:long>95.8972</geo:long></item>";
  eq(hasAllTags(xml, ["geo:lat", "geo:long"]), true);
  eq(
    hasAllTags(xml, [
      ["item", "geo:lat"],
      ["item", "geo:long"]
    ]),
    true
  );
  eq(hasAllTags(xml, ["name", "email"]), false);
});
