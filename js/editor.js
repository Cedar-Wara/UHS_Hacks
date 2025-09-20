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

let rosepineLightJson = `{
  "base": "vs",
  "inherit": true,
  "rules": [
    {
      "background": "faf4ed",
      "token": ""
    },
    {
      "foreground": "9893a5",
      "token": "comment"
    },
    {
      "foreground": "797593",
      "token": "punctuation.definition.comment"
    },
    {
      "foreground": "9893a5",
      "token": "comment.block.documentation"
    },
    {
      "foreground": "575279",
      "token": "variable"
    },
    {
      "foreground": "d7827e",
      "token": "variable.other.readwrite.instance"
    },
    {
      "foreground": "d7827e",
      "token": "variable.other"
    },
    {
      "foreground": "b4637a",
      "token": "keyword"
    },
    {
      "foreground": "286983",
      "token": "storage.type"
    },
    {
      "foreground": "286983",
      "token": "storage.modifier"
    },
    {
      "foreground": "ea9d34",
      "token": "string"
    },
    {
      "foreground": "ea9d34",
      "token": "string.quoted"
    },
    {
      "foreground": "ea9d34",
      "token": "string.escape"
    },
    {
      "foreground": "56949f",
      "token": "support.function"
    },
    {
      "foreground": "56949f",
      "token": "support.constant"
    },
    {
      "foreground": "907aa9",
      "token": "entity.name.class"
    },
    {
      "foreground": "907aa9",
      "token": "entity.other.inherited-class"
    },
    {
      "foreground": "907aa9",
      "token": "entity.name.tag"
    },
    {
      "foreground": "b4637a",
      "token": "constant.language"
    },
    {
      "foreground": "b4637a",
      "token": "constant.numeric"
    },
    {
      "foreground": "b4637a",
      "token": "constant.other"
    },
    {
      "foreground": "b4637a",
      "token": "constant.character.escape"
    },
    {
      "foreground": "b4637a",
      "token": "invalid"
    },
    {
      "foreground": "faf4ed",
      "background": "b4637a",
      "token": "invalid.illegal"
    },
    {
      "foreground": "faf4ed",
      "background": "797593",
      "token": "invalid.deprecated"
    },
    {
      "foreground": "d7827e",
      "token": "entity.name.function"
    },
    {
      "foreground": "d7827e",
      "token": "variable.parameter"
    },
    {
      "foreground": "b4637a",
      "token": "message.error"
    },
    {
      "foreground": "56949f",
      "token": "markup.inserted"
    },
    {
      "foreground": "b4637a",
      "token": "markup.deleted"
    },
    {
      "foreground": "ea9d34",
      "token": "markup.changed"
    },
    {
      "foreground": "d7827e",
      "token": "entity.name.namespace"
    },
    {
      "foreground": "286983",
      "token": "entity.other.attribute-name"
    },
    {
      "foreground": "907aa9",
      "token": "support.type"
    },
    {
      "foreground": "ea9d34",
      "token": "constant.character"
    },
    {
      "foreground": "575279",
      "token": "text"
    },
    {
      "foreground": "575279",
      "token": "meta.structure"
    },
    {
      "foreground": "9893a5",
      "token": "meta.diff"
    },
    {
      "foreground": "9893a5",
      "token": "meta.separator"
    }
  ],
  "colors": {
    "editor.foreground": "#575279",
    "editor.background": "#faf4ed",
    "editor.selectionBackground": "#dfdad9",
    "editor.lineHighlightBackground": "#f4ede8",
    "editorCursor.foreground": "#575279",
    "editorWhitespace.foreground": "#cecacd",
    "editorIndentGuide.activeBackground": "#286983",
    "editor.selectionHighlightBorder": "#faf4ed",
    "editor.inactiveSelectionBackground": "#dfdad9",
    "editor.selectionHighlightBackground": "#f4ede8"
  }
}
`;

require(["vs/editor/editor.main"], () => {
  monaco.editor.defineTheme('rosepine', JSON.parse(rosepineLightJson));
  monaco.editor.setTheme('rosepine');

  window.editor = monaco.editor.create(document.querySelector('.code-section'), {
    value: `let playerX = 250;
let playerY = 250;
let playerSize = 50;

let gravity = 0;
let crashed = false;

let topPipeHeight = 50;
let bottomPipeHeight = 50;

let pipeX = 500;
let pipeWidth = 50;

let score = 0;

function setup() {
  //setup code here
}

function draw() {
  background(100, 200, 255)

  if (crashed == false) {
    movePlayer();
    movePipes();
  } else {
    gameOverScreen();
  }

  drawPlayer();
  drawPipes();

  drawScore();
}

function drawScore() {
  fill(255);
  textSize(24)
  text("Score: " + score, 10, 25);
}

function drawPipes() {
  fill(0, 255, 0);
  rect(pipeX, 0, pipeWidth, topPipeHeight);
  rect(pipeX, 500 - bottomPipeHeight, pipeWidth, bottomPipeHeight);
}

function movePipes() {
  pipeX -= 3;

  if (pipeX < -pipeWidth) {
    pipeX = 500;
    bottomPipeHeight = random(50, 220)
    topPipeHeight = random(50, 220)
    score += 1;
  }
}

function drawPlayer() {
  fill(255, 255, 0);
  ellipse(playerX, playerY, playerSize, playerSize);
}

function movePlayer() {
  playerY += gravity;
  gravity += 0.3;

  if (gravity > 8) {
    gravity = 8;
  }
  if (gravity < -8) {
    gravity = -8;
  }

  if (playerY > 500 || playerY < 0) {
    crashed = true;
  }

  if (collision(pipeX, 0, pipeWidth, topPipeHeight)) {
    crashed = true;
  }
  if (collision(pipeX, 500 - bottomPipeHeight, pipeWidth, bottomPipeHeight)) {
    crashed = true;
  }
}

function mousePressed() {
  gravity = -6;
}

function gameOverScreen() {
  fill(255)

  textSize(24);

  text("Game Over", 200, 200);

  text("Click to restart", 180, 350);

  if (crashed && mouseIsPressed) {
    playerY = 250;
    gravity = 0;
    crashed = false;
    pipeX = 500;
    score = 0;
  }
}

function collision(x1, y1, w1, h1) {
  if (x1 + w1 >= playerX - playerSize / 2 &&
    x1 <= playerX + playerSize / 2 &&
    y1 + h1 >= playerY - playerSize / 2 &&
    y1 <= playerY + playerSize / 2) {
    return true;
  }
  return false;
}
`,
    language: 'javascript',
    theme: 'rosepine',
    font: 'JetBrains Mono',
    fontSize: 14,

  });
});

function getEditorValue() {
  return window.editor.getValue();
}
