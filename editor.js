require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs' } });

let rosepineJson = `{
  "base": "vs-dark",
  "inherit": true,
  "rules": [
    {
      "background": "191724",
      "token": ""
    },
    {
      "foreground": "6e6a86",
      "token": "comment"
    },
    {
      "foreground": "908caa",
      "token": "punctuation.definition.comment"
    },
    {
      "foreground": "6e6a86",
      "token": "comment.block.documentation"
    },
    {
      "foreground": "e0def4",
      "token": "variable"
    },
    {
      "foreground": "ebbcba",
      "token": "variable.other.readwrite.instance"
    },
    {
      "foreground": "ebbcba",
      "token": "variable.other"
    },
    {
      "foreground": "eb6f92",
      "token": "keyword"
    },
    {
      "foreground": "31748f",
      "token": "storage.type"
    },
    {
      "foreground": "31748f",
      "token": "storage.modifier"
    },
    {
      "foreground": "f6c177",
      "token": "string"
    },
    {
      "foreground": "f6c177",
      "token": "string.quoted"
    },
    {
      "foreground": "f6c177",
      "token": "string.escape"
    },
    {
      "foreground": "9ccfd8",
      "token": "support.function"
    },
    {
      "foreground": "9ccfd8",
      "token": "support.constant"
    },
    {
      "foreground": "c4a7e7",
      "token": "entity.name.class"
    },
    {
      "foreground": "c4a7e7",
      "token": "entity.other.inherited-class"
    },
    {
      "foreground": "c4a7e7",
      "token": "entity.name.tag"
    },
    {
      "foreground": "eb6f92",
      "token": "constant.language"
    },
    {
      "foreground": "eb6f92",
      "token": "constant.numeric"
    },
    {
      "foreground": "eb6f92",
      "token": "constant.other"
    },
    {
      "foreground": "eb6f92",
      "token": "constant.character.escape"
    },
    {
      "foreground": "eb6f92",
      "token": "invalid"
    },
    {
      "foreground": "e0def4",
      "background": "eb6f92",
      "token": "invalid.illegal"
    },
    {
      "foreground": "e0def4",
      "background": "908caa",
      "token": "invalid.deprecated"
    },
    {
      "foreground": "ebbcba",
      "token": "entity.name.function"
    },
    {
      "foreground": "ebbcba",
      "token": "variable.parameter"
    },
    {
      "foreground": "eb6f92",
      "token": "message.error"
    },
    {
      "foreground": "9ccfd8",
      "token": "markup.inserted"
    },
    {
      "foreground": "eb6f92",
      "token": "markup.deleted"
    },
    {
      "foreground": "f6c177",
      "token": "markup.changed"
    },
    {
      "foreground": "ebbcba",
      "token": "entity.name.namespace"
    },
    {
      "foreground": "31748f",
      "token": "entity.other.attribute-name"
    },
    {
      "foreground": "c4a7e7",
      "token": "support.type"
    },
    {
      "foreground": "f6c177",
      "token": "constant.character"
    },
    {
      "foreground": "e0def4",
      "token": "text"
    },
    {
      "foreground": "e0def4",
      "token": "meta.structure"
    },
    {
      "foreground": "6e6a86",
      "token": "meta.diff"
    },
    {
      "foreground": "6e6a86",
      "token": "meta.separator"
    }
  ],
  "colors": {
    "editor.foreground": "#e0def4",
    "editor.background": "#191724",
    "editor.selectionBackground": "#6e6a8633",
    "editor.lineHighlightBackground": "#6e6a861a",
    "editorCursor.foreground": "#e0def4",
    "editorWhitespace.foreground": "#6e6a8680",
    "editorIndentGuide.activeBackground": "#31748f",
    "editor.selectionHighlightBorder": "#191724",
    "editor.inactiveSelectionBackground": "#6e6a861a",
    "editor.selectionHighlightBackground": "#6e6a8633"
  }
}
`;

require(["vs/editor/editor.main"], () => {
  monaco.editor.defineTheme('rosepine', JSON.parse(rosepineJson));
  monaco.editor.setTheme('rosepine');

  monaco.editor.create(document.querySelector('.code-section'), {
    value: `// welcome!
const msg = "Hello, world!";
let x = 5;
var ready = true;

function double(n) {
  return n * 2;
}

const nums = [1, 2, 3];
for (let n of nums) {
  console.log(n, double(n));
}

if (ready && x > 0) {
  console.log(msg);
} else {
  console.warn("Not ready!");
}
`,
    language: 'javascript',
    theme: 'rosepine',
  });
});

