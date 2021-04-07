import React, { memo } from 'react';
import VideoItem from './VideoItem';

const VideoList = memo((props) => {
    const { list } = props;

    if(list.length === 0){
        return <div></div>
    }

    return (
        <div className='video-list'>
            {
                list.map((item)=>{
                    return <VideoItem key={item.id.videoId}
                    video={item}
                    />
                })
            }
        </div>
    )
})

export default VideoList
