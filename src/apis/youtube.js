import axios from 'axios';

const youtubeKey = 'AIzaSyAHxANKPysttlULq1oK3yrEA97YAzEjkw8';

const youtube = axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:'5',
        key: youtubeKey
    }
})

export default youtube;