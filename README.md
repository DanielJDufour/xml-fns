# xml-fns
> Higher Level XML Utility Functions

## install
```bash
npm install xml-fns
```

## usage
### findTagText
```js
import { findTagText } from "xml-fns/findTagText.js"

const xml = `
<item>
  <title>
    My Article
  </title>
</item>
`;

// by tag name
findTagText(xml, "title"); // "My Article"
```

### hasTag
```js
import { hasTag } from "xml-fns/hasTag.js"

const xml = `
<item>
  <title>My Article</title>
</item>
`;

// by tag name
hasTag(xml, "title"); // true

// by tag path
hasTag(xml, ["item", "title"]); // true
```

### hasAllTags
```js
import { hasAllTags } from "xml-fns/hasAllTags.js"

const xml = `
<item>
  <title>My Article</title>
  <geo:lat>5.5319</geo:lat>
  <geo:long>95.8972</geo:long>  
</item>
`;

// by tag names
hasAllTags(xml, ["geo:lat", "geo:long"]); // true

// by tag paths
hasAllTags(xml, [["item", "geo:lat"], ["item", "geo:long"]]); // true
```
