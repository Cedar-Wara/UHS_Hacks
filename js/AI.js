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

function sendMessage(message){
    let newEl = document.createElement("div")
    newEl.outerHTML=`
<div class="human-message">
    <div class="message">${message}</div>
    <div class="icon-container"></div>
</div>
    `
}
