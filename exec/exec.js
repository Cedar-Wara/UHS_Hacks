const acceptedFunctions = [
  "mousePressed",
  "mouseReleased",
  "mouseClicked",
  "mouseMoved",
  "mouseDragged",
  "doubleClicked",
  "mouseWheel",
  "keyPressed",
  "keyReleased",
  "keyTyped",
  "touchStarted",
  "touchEnded",
]


console.log = (...args) => {
  window.parent.postMessage({ type: "log", message: args })
}

console.error = (...args) => {
  window.parent.postMessage({ type: "error", message: args })
}

window.addEventListener("message", (event) => {
  runJs(event.data)
})

function runJs(js) {
  //clear dangerous objects and run code
  let nl = "\n"
  eval(`
        try {
            `+ js + `
        }catch(e){
          let stack = e.stack.split(nl);
            console.error(stack[1],e.message);
        }
    `);

  let eventFunctions = [];

  for (let acceptedFunc of acceptedFunctions) {
    let funcDef;
    try {
      funcDef = eval(acceptedFunc);
    } catch (e) {
      funcDef = undefined;
    }

    if (funcDef !== undefined) {
      eventFunctions.push(funcDef);
    }
  }

  if (draw === undefined || setup === undefined) {
    return;
  }

  startP5(draw, setup, eventFunctions);
}


//helpers


function startP5(drawArg, setupArg, otherFunctions) {
  window.setup = function() {
    setupArg()
    document.getElementById("defaultCanvas0").style.width = "100vmin";
    document.getElementById("defaultCanvas0").style.height = "100vmin";
  };

  for (let func of otherFunctions) {
    if (acceptedFunctions.includes(func.name)) {
      window[func.name] = func;
    }
  }

  window.draw = drawArg;

  new p5();
}

