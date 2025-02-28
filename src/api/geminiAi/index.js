const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
      
async function generateTextWithGemini(textinput){
    
      let results
      const apiKey = process.env.GEMINI_API_KEY;
      const genAI = new GoogleGenerativeAI(apiKey);
      
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash-exp",
      });
      
      const generationConfig = {
        temperature: 1.6,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      };
      
      async function run(text) {
        const chatSession = model.startChat({
          generationConfig,
          history: [
          ],
        });
      
        const result = await chatSession.sendMessage(text);
        // console.log(result.response.text());
        results = result.response.text();
      }
      
      await run(textinput);
      return results
}
async function generateJpgImageWithGemini(textinput){
    
      
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
    });
    
    const generationConfig = {
      temperature: 1.6,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "image/jpg",
    };
    
    async function run(text) {
      const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
      });
    
      const result = await chatSession.sendMessage(text);
      console.log(result.response.text());
      return result.response.text()
    }
    
    run(textinput);
}

async function generateJpegImageWithGemini(textinput){
    
      
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
    });
    
    const generationConfig = {
      temperature: 1.6,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "image/jpeg",
    };
    
    async function run(text) {
      const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
      });
    
      const result = await chatSession.sendMessage(text);
      console.log(result.response.text());
      return result.response.text()
    }
    
    run(textinput);
}

export default {
    generateTextWithGemini,
    generateJpegImageWithGemini,
    generateJpgImageWithGemini

}
