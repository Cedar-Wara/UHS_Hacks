const token = "sk-a4156b91113743e19bfd9b5bb161f0ca"

let messageHistory =[

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
            messages: [
                { role: 'user', content: 'What is the capital of France?' }
            ],
            stream:false,
        })
    });

    const data = await response.json();
    console.log(data);

    messageHistory.push({
        role:"assistant",
        content:message,
    })

    console.log(data);

    return data;
}

function addMessage(message){
    let newEl = document.createElement("div")
    newEl.className="message human"
    newEl.innerHTML=`
    <div class="content">${message}</div>
    <div class="icon-container"></div>
    `
    document.querySelector(".ai-response").appendChild(newEl)
}


document.querySelector(".send-button").addEventListener("click", ()=>{
    let value = document.querySelector(".text-box").value;
    console.log(value)
    if(value===null||value===undefined){
        return;
    }
    addMessage(value);
})