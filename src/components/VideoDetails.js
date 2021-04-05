import React from 'react'

const VideoDetails = (props) => {
    const {currentVideo} = props;

    if(!currentVideo){
        return <div>Start a search by term in the top bar</div>
    }

    const urlForIframe = `https://www.youtube.com/embed/${currentVideo.id.videoId}?autoplay=1`

    return (
        <div className='current-video'>
            <div className='current-video__video'>
                <iframe
                src={urlForIframe}
                title='YouTube video player'
                allowFullScreen
                ></iframe>
            </div>

            <div className='current-video__description'>
                <h1>{currentVideo.snippet.title}</h1>
                <p>{currentVideo.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetails
