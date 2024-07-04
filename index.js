const { default: ollama }= require('ollama');

(async()=>{
    const response = await ollama.chat({
        model: 'llama3',
        messages: [{ role: 'user', content: 'hi' }],
    })
    console.log(response.message.content)
})();