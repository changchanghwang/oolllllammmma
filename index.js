const { default: ollama }= require('ollama');

(async()=>{
    const response = await ollama.chat({
        model: 'avian',
        messages: [{ role: 'user', content: 'hi. what is the caique?' }],
    })
    console.log(response.message.content)
    console.log("\n--------------------------------------------------------\n")
    const response2 = await ollama.chat({
        model: 'avian',
        messages: [{ role: 'user', content: 'who is the best caique?' }],
    })
    console.log(response2.message.content)
})();