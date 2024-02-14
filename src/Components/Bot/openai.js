 const { Configuration,OpenAiApi }= require("openai");


 const config=new Configuration({apikey:"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"});

 const openai=new OpenAiApi(config);

 export async function sendMsg(message){
     const res= await openai.createCompletion({
         model:'text-davinci-003',
         prompt:'message',
         temperature:0.7,
         max_tokens:'256',
         top_p:1,
         frequency_penalty:0,
         prensence_penalty:0


     });
     return res.data.choices[0].text;


}
