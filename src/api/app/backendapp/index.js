import textGenerator from '../../geminiAi'
import videoFetching from '../../aiimage'
import narrator from '../../ainarrator/rapidapi'

async function runscripts(params) {
    let prompt = 'Write a 300 words story about how the U.S tricks individuals, always generate a different story'
    let script = await textGenerator.generateTextWithGemini('respond to this directly without repeating or announcing the task: '+prompt)
    let editedprompt = ''
    let keywords = ''
    let videos = []
    let vidKeys = []
    let aa
    console.log(script)
    if(script){

    editedprompt ='Read this script and take 10 keywords from it and have it in a list followed by commas: '+script
    keywords = await textGenerator.generateTextWithGemini(editedprompt)
    
    if(keywords){
        console.log('keywords: '+keywords)
        vidKeys= keywords.split(',')
        console.log(vidKeys)
    
    
    for(let i=0;i<5;i++){
        let ee = await videoFetching.queryPortraitVideo(vidKeys[i])
        console.log(ee)
       videos=[...videos,...ee];
    }
    console.log('videos: '+videos)
    let narrater = await narrator.narrate(script);
    console.log('narrator: '+narrater)
    aa=narrater
    
    }
    
    }
    //  script + videos + narrator
    //video editing
    return {
        'narrator': aa,
        'script': script,
        'videos': videos,
        'bgMusic':'/assets/music/creepy.mp3'
    }

}

export default {
    runscripts
}