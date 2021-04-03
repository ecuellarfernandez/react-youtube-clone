import React, { memo } from 'react'

const VideoItem = memo((props) => {
    const {video, handleVideoSelect} = props;

    return (
        <div onClick={()=> handleVideoSelect(video)} className='video-item'>
            <img alt={video.snippet.description} src={video.snippet.thumbnails.medium.url}/>
            <div className='video-item__description'>
                <h5>{video.snippet.title}</h5>
                <h6>{video.snippet.channelTitle}</h6>
            </div>
        </div>
    )
})

export default VideoItem
