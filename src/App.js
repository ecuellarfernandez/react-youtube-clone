import { useState } from "react";
import SearchBar from "./components/SearchBar";
import {youtube} from './apis/youtube';
import VideoList from "./components/VideoList";
import './static/css/main.scss';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import VideoDetails from './components/VideoDetails';

function App() {

  const [videos, setVideos] = useState([]);

  const handleSubmit = async (termReceivedFromSearchBar)=>{
    try{
      const res = await youtube.get('/search', {
        params:{
          q: termReceivedFromSearchBar,
          maxResults:'5',
          type: 'video'
        }
      })
      setVideos(res.data.items);
    }catch(e){
      console.error(e)
    }
  }

  return (
    <Router>

      <Link to="/">Inicio</Link>

      <div id='wrapper'>
    <Switch>

        <Route path='/video/:id'>
          <SearchBar submitHandler={handleSubmit}/>
          <VideoDetails />
        </Route>

        <Route path='/' exact>
          <SearchBar submitHandler={handleSubmit}/>
          <VideoList list={videos} />
        </Route>

        <Route path="*">
            <h1>No match</h1>
        </Route>

    </Switch>

      </div>
    </Router>
  );
}

export default App;
