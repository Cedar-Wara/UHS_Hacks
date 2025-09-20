const Token = "v1:tfI1vqwAqih9PLP9I8muidxl:ZIg4ykpEPAJOHLcjKgP48rva"

let messageHistory =[

]

async function makeModelRequest(message) {
    messageHistory.push({
        role:"user",
        content:message,
    })

    const response = await fetch('https://api.vercel.com/v6/ai-gateway/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer `+Token, // Replace with your actual API key
        },
        body: JSON.stringify({
            model: 'anthropic/claude-4-sonnet',
            messages: [
                { role: 'user', content: 'What is the capital of France?' }
            ]
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