import React from 'react';
import * as axios from 'axios';

const token = 'IGQVJYTUtHc2V4QnZAaWUY2VWYwWmowVHc0WFJGSjhKVmplcXJ5RXRCQnRjTkZAObFJxRW1uVThpSGc4UnNZAVVFoaTY5UmNROEFoMGlTdnZAVZADIyTFRQLThuVVZArSk00c25sRVB4b1dwVTdiUk9Dd2VaagZDZD'


const Instagram = () => {
  // create a new instance so we don't delete the csrf token for other requests
  let instance = axios.create();

  // delete the x-csrf-token header
  delete instance.defaults.headers.common['X-CSRF-TOKEN'];

  // use the new instance to make your get request
  instance.get(`https://graph.instagram.com/me/media?fields=id,media_url,username,caption&access_token=${token}`)
    .then(response => console.log(response))
  return null;
}

export default Instagram;
