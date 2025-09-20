const token = "sk-a4156b91113743e19bfd9b5bb161f0ca"

let messageHistory =[
    {role:"system",content:"Always respond concisely. dont respond with long paragraphs. All code you are given is in JS and uses P5.js for graphics. When given an error explain how to fix the error and what to avoid in the future. never respond with a fully corrected project. you are teaching programming"}
]


async function makeModelRequest(message) {
    messageHistory.push({
        role:"user",
        content:message,
    })

    console.log(`Bearer `+token)
    const response = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer `+token, // Replace with your actual API key
        },
        body: JSON.stringify({
            model: 'deepseek-chat',
            messages: messageHistory,
            stream:false,
        })
    });

    const data = await response.json();
    console.log(data);
    let out = data.choices[0].message

    messageHistory.push(out)

    console.log(out);

    return out;
}

function addMessage(message,type){
    let newEl = document.createElement("div")
    newEl.className="message "+type
    if(type==="human") {
        newEl.innerHTML = `
        <div class="content">${message}</div>
        <img class="icon-container" src="imgs/user.png">
        `
    }else{
        newEl.innerHTML = `
        <img class="icon-container" src="imgs/icon.png">
        <div class="content">${message}</div>
        `
    }
    document.querySelector(".ai-response").appendChild(newEl)
}


document.querySelector(".send-button").addEventListener("click", ()=>{
    let value = document.querySelector(".text-box").value;
    console.log(value)
    if(value===null||value===undefined){
        return;
    }
    addMessage(value,"human");
    makeModelRequest(value).then(((data)=>{
        document.querySelector(".text-box").value = "";
        addMessage(marked.parse(data.content),"ai");
    }));
})

function promptAI(error){
    let message = "I am having the error: "+error+". for my code: "+getEditorValue();
    makeModelRequest(message).then(((data)=>{
        addMessage(marked.parse(data.content),"ai");
    }))
}

makeModelRequest("hello there!").then(((data)=>{
    document.querySelector(".text-box").value = "";
    addMessage(marked.parse(data.content),"ai");
}));