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


console.log = (...args)=>{
    window.parent.postMessage(args)
}

window.addEventListener("message", (event)=>{
    runJs(event.data)
    console.log(event.data)
})

function runJs(js){
    //clear dangerous objects and run code
    let nl = "\n"
    eval(`
        try {
            `+js+`
        }catch(e){
            let stack = e.stack.split(nl);
            let lineCol = stack[1].replace("at eval (eval at runJs (webpack:///./src/exec/index.js?),","").replace(")","").split(":");
            let out = lineCol[1]-2+":"+lineCol[2];
            console.error(" "+out+" : "+stack[0]);
        }
    `);

    let eventFunctions = [];

    for (let acceptedFunc of acceptedFunctions){
        let funcDef;
        try {
            funcDef = eval(acceptedFunc);
        }catch(e){
            funcDef = undefined;
        }

        if (funcDef !== undefined) {
            eventFunctions.push(funcDef);
        }
    }

    if(draw===undefined||setup===undefined){
        return;
    }

    startP5(draw,setup,eventFunctions);
}


//helpers


function startP5(drawArg,setupArg,otherFunctions) {
    window.setup = function(){
        createCanvas(500,500);
        createCanvas = function (){
            console.error("createCanvas is disabled");
        }
        document.getElementById("defaultCanvas0").style.width = "100vmin";
        document.getElementById("defaultCanvas0").style.height = "100vmin";
        setupArg()
    };

    for(let func of otherFunctions){
        if(acceptedFunctions.includes(func.name)) {
            window[func.name] = func;
        }
    }

    window.draw = drawArg;

    new p5();
}

