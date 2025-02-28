async function snapchatPost(obj){
    // OAuth 2.0 authorization code flow typically involves browser redirection for security reasons.
// Fetch is not ideal for this flow, as it cannot directly handle browser redirections.

// However, here's an explanation of how the curl command could be translated into a fetch request for illustration purposes, assuming you already have the authorization code:

const url = 'https://accounts.snapchat.com/login/oauth2/token';

const data = {
  grant_type: 'authorization_code',
  code: '{authorization_code}', // Replace with your authorization code
  redirect_uri: '{your_redirect_uri}', // Replace with your redirect URI
  client_id: '{your_client_id}', // Replace with your client ID
  client_secret: '{your_client_secret}' // Replace with your client secret
};

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded' // Typically required for POST requests with form data
  },
  body: new URLSearchParams(data) // URLSearchParams helps encode form data
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
    // Handle the access token response here
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

// Important notes:
// 1. Replace the placeholders with your actual values.
// 2. This approach bypasses the browser redirection involved in the authorization code flow.
// 3. For a secure OAuth 2.0 implementation, consider using a library or framework designed for handling browser redirects.
}