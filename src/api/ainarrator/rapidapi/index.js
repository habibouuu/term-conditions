const axios = require('axios');

async function narrate(text){
    const encodedParams = new URLSearchParams();
    encodedParams.set('src', text);
    encodedParams.set('hl', 'en-us');
    encodedParams.set('v', 'Mike');
    encodedParams.set('r', '1.80');
    encodedParams.set('c', 'mp3');
    encodedParams.set('f', '48khz_8bit_mono');
    encodedParams.set('b64', true);
    // encodedParams.set('ssml', true);
   

    const options = {
    method: 'POST',
    url: 'https://voicerss-text-to-speech.p.rapidapi.com/',
    params: {
        key: 'c71d26abe35c4ded8ba8c64e1750e9ef'
      },
    headers: {
        'x-rapidapi-key': 'a0df501637mshf5606edf6b3ead5p10e40fjsn09d5c8594c29',
        'x-rapidapi-host': 'voicerss-text-to-speech.p.rapidapi.com',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: encodedParams,
    };

    try {
        const response = await axios.request(options);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
async function narrate2(text){
    const options = {
        method: 'POST',
        url: 'https://text-to-speech-plugnplay.p.rapidapi.com/gcp/text-to-speech/',
        headers: {
          'x-rapidapi-key': 'a0df501637mshf5606edf6b3ead5p10e40fjsn09d5c8594c29',
          'x-rapidapi-host': 'text-to-speech-plugnplay.p.rapidapi.com',
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3ODIzNTE5LCJpYXQiOjE3Mjc4MTk5MTksImp0aSI6IjkyNzllOTgzYWNkZjQwYjc5ZjczNzBiMDEwYjU3N2UzIiwiVGVuYW50SWQiOjEsIkVtYWlsIjoicy52bmIwN0BnbWFpbC5jb20iLCJUZW5hbnQiOnRydWV9.svwYnVHoF0_W18M5k0ei1-rhGWruDxI4W4VG-EhsDT0'
        },
        data: {
          text: text,
          voice_name: 'en-US-Wavenet-F',
          auto_translate: true,
          la_code:"en-US"
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          return response.data.audio_url
      } catch (error) {
          console.error(error);
      }
    
}
export default {
    narrate,
    narrate2
}