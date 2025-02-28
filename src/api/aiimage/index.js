import { createClient } from 'pexels';



// All requests made with the client will be authenticated
async function queryImage(text){
    const client = createClient(process.env.PEXELS_API_KEY);
    const query = text;
    client.photos.search({ query, per_page: 1 }).then(photos => console.log(photos));
}
async function queryPortraitVideo(text){
    
    const client =  createClient(process.env.PEXELS_API_KEY);
    const query = text;
    return client.videos.search({ query, orientation: 'portrait', size:'large', per_page: 2,
        min_width: 350,
        // max_width: ,
        min_duration: 20,
        // max_duration: , 
    }).then(video => {
        return [
        video.videos[0].video_files[0].link,
        video.videos[1].video_files[1].link

       ]

    });
}
async function queryLandscapeVideo(text){
    const client = createClient(process.env.PEXELS_API_KEY);
    const query = text;
    return client.videos.search({ query, orientation: 'landscape', per_page: 1 }).then(video => {
       return [video.videos[0].video_files[0].link]

    });
}


export default {
    queryImage,
    queryPortraitVideo,
    queryLandscapeVideo
}