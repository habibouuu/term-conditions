async function linkedinPost(){
    
    const url = 'https://api.linkedin.com/rest/videos?action=initializeUpload';
    const version = '{version number in the format YYYYMM}'; // Replace with your actual version number
    const token = '{INSERT_TOKEN}'; // Replace with your access token

    const body = JSON.stringify({
    "initializeUploadRequest": {
        "owner": "urn:li:organization:2414183",
        "fileSizeBytes": 1055736,
        "uploadCaptions": false,
        "uploadThumbnail": false
    }
    });

    const options = {
    method: 'POST',
    headers: {
        'LinkedIn-Version': version,
        'X-RestLi-Protocol-Version': '2.0.0',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
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