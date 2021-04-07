import React, { memo } from 'react';
import {Link} from 'react-router-dom';

const VideoItem = memo((props) => {
    const {video} = props;

    if(!video.snippet){
        return <div alt='no valid result'></div>
    }

    return (
        <Link to={`/video/${video.id.videoId}`} className='video-item'>
            <img alt={video.snippet.description} src={video.snippet.thumbnails.medium.url}/>
            <div className='video-item__description'>
                <h5>{video.snippet.title}</h5>
                <h6>{video.snippet.channelTitle}</h6>
            </div>
        </Link>
    )
})

export default VideoItem
