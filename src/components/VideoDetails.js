import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { youtube } from '../apis/youtube';
import VideoList from './VideoList';

const VideoDetails = () => {

    const [currentVideo, setCurrentVideo] = useState({});
    const [relatedVideos, setRelatedVideos] = useState([]);

    const { id } = useParams();

    const urlForIframe = `https://www.youtube.com/embed/${id}?autoplay=1`;

    useEffect(()=>{
        const getVideo = async ()=>{
            try{
                const res = await youtube.get('/videos', {
                    params:{
                        id:id
                    }
                })
                setCurrentVideo(res.data.items[0].snippet);
            }catch(e){
                console.error(e);
            }
        }

        const getRelatedVideos = async ()=>{
            try{
                const res = await youtube.get('/search', {
                    params:{
                        relatedToVideoId: id,
                        type:'video'
                    }
                })
                setRelatedVideos(res.data.items);
            }catch(e){
                console.error(e);
            }
        }

        getRelatedVideos();
        getVideo();
    }, [id])

    return (
        <Fragment>
        <div className='current-video'>
            <div className='current-video__video'>
                <iframe
                src={urlForIframe}
                title='YouTube video player'
                allowFullScreen
                ></iframe>
            </div>

            <div className='current-video__description'>
                <h1>{currentVideo.title}</h1>
                <p>{currentVideo.description}</p>
            </div>
        </div>
        <VideoList list={relatedVideos} />
        </Fragment>
    )
}

export default VideoDetails
