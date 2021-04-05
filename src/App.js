import { useState } from "react";
import SearchBar from "./components/SearchBar";
import youtube from './apis/youtube';
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import './static/css/main.scss';

function App() {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (termReceivedFromSearchBar)=>{
    try{
      const res = await youtube.get('/search', {
        params:{
          q: termReceivedFromSearchBar,
          type: 'video'
        }
      })
      setVideos(res.data.items);
      setSelectedVideo(res.data.items[0]);
    }catch(e){
      console.error(e)
    }
  }

  const handleVideoSelect = (video)=>{
    console.log(video)
    setSelectedVideo(video)
  }

  return (
    <div id='wrapper'>
        <SearchBar submitHandler={handleSubmit}/>
        <VideoDetails currentVideo={selectedVideo}/>
        <VideoList list={videos} handleVideoSelect={handleVideoSelect}/>
    </div>
  );
}

export default App;
