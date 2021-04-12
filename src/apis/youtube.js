import axios from 'axios';

const youtubeKey = 'AIzaSyAGfrsJcmHNX_yS9kvfLls3uub5e47p0vw';

export const youtube = axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        key: youtubeKey
    }
})
// aaaa