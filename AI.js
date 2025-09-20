const Token = "vck_3SU07YKfunnAtTjjsVfETj8h498Mw0ULLXXtttKN17MiULimCf101pfm"

let messageHistory =[

]

async function makeModelRequest(message) {
    messageHistory.push({
        role:"user",
        content:message,
    })

    const response = await fetch('https://ai-gateway.vercel.sh/v1/chat/completions', {
        method: 'POST',
        mode:"no-cors",
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