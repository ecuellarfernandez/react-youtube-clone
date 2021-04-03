import React, { memo } from 'react';
import VideoItem from './VideoItem';

const VideoList = memo((props) => {
    const { list, handleVideoSelect } = props;

    if(list.length === 0){
        return <div></div>
    }

    return (
        <div className='video-list'>
        {console.log(list)}
            {
                list.map((item)=>{
                    return <VideoItem key={item.id.videoId}
                    video={item}
                    handleVideoSelect={handleVideoSelect}
                    />
                })
            }
        </div>
    )
})

export default VideoList
