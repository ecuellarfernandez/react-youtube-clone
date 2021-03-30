import { useState } from "react";
import SearchBar from "./components/SearchBar";
import youtube from './apis/youtube';
import { Container } from "@material-ui/core";

function App() {

  // const [videos, setVideos] = useState([]);
  // const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (termReceivedFromSearchBar)=>{
    try{
      const res = await youtube.get('/search', {
        params:{
          q: termReceivedFromSearchBar
        }
      })

      console.log(res.data.items);
      
    }catch(e){
      console.error(e)
    }
  }

  // const handleVideoSelect = ()=>{

  // }

  return (
    <Container>
      <SearchBar submitHandler={handleSubmit}/>
      {/* <VideoDetail /> */}
      {/* <VideoList /> */}
    </Container>
  );
}

export default App;
