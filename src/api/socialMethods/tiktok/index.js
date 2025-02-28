

async function tiktokPostImages(obj) {

    const url = 'https://open.tiktokapis.com/v2/post/publish/content/init/';
    const headers = {
      'Authorization': 'Bearer act.example12345Example12345Example',
      'Content-Type': 'application/json'
    };
    
    const photoImagesUrlsJson = JSON.stringify(obj.photoImagesUrls); // Assuming obj.photoImagesUrls is an array of image URLs
    
    const body = JSON.stringify({
      "post_info": {
        "title": obj.title,
        "description": obj.description,
        "disable_comment": obj.commentOnorOff,
        "privacy_level": "PUBLIC_TO_EVERYONE",
        "auto_add_music": obj.autoMusicOnorOff
      },
      "source_info": {
        "source": "PULL_FROM_URL",
        "photo_cover_index": 1,
        "photo_images": photoImagesUrlsJson
      },
      "post_mode": "DIRECT_POST",
      "media_type": "PHOTO"
    });
    
    const options = {
      method: 'POST',
      headers,
      body
    };
    
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        // Handle the API response here
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
}

// photoImagesUrls:[
//     "https://tiktokcdn.com/obj/example-image-01.webp",
//     "https://tiktokcdn.com/obj/example-image-02.webp"
// ]
async function tiktokPostVideos(obj) {
  
    const url = 'https://open.tiktokapis.com/v2/post/publish/video/init/';
const headers = {
  'Authorization': 'Bearer act.example12345Example12345Example',
  'Content-Type': 'application/json; charset=UTF-8'
};
const body = JSON.stringify({
  "post_info": {
    "title": obj.title,
    "privacy_level": "PUBLIC_TO_EVERYONE",
    "disable_duet": obj.duets,
    "disable_comment": obj.commentOnorOff,
    "disable_stitch": obj.stitchOnorOff,
    "video_cover_timestamp_ms": obj.video_cover_timestamp
  },
  "source_info": {
    "source": "FILE_UPLOAD",
    "video_size": 50000123,
    "chunk_size": 10000000,
    "total_chunk_count": 5
  }
});

const options = {
  method: 'POST',
  headers,
  body
};

fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Handle the API response here
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}

export default {
  tiktokPostVideos
}