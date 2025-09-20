const token = "vck_7FrOn8NYXQyMNOA1WTNEh1X2JIitCc4nhns5b2S21WoHlqvYAr0T4dDg"

let messageHistory =[

]

async function makeModelRequest(message) {
    messageHistory.push({
        role:"user",
        content:message,
    })

    console.log(`Bearer `+token)
    const response = await fetch('https://ai-gateway.vercel.sh/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer `+token, // Replace with your actual API key
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