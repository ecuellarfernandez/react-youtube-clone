import {useState} from "react";
import SearchBar from "./components/SearchBar";
import {youtube} from "./apis/youtube";
import VideoList from "./components/VideoList";
import "./static/css/main.scss";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import VideoDetails from "./components/VideoDetails";
import Sidebar from "./components/Sidebar/Sidebar";
import NotFound from "./screens/NotFound";
function App() {
	const [videos, setVideos] = useState([]);

	const handleSubmit = async (termReceivedFromSearchBar) => {
		try {
			const res = await youtube.get("/search", {
				params: {
					q: termReceivedFromSearchBar,
					maxResults: "5",
					type: "video",
				},
			});
			setVideos(res.data.items);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<Router>
			<div className="app">
				<Sidebar searchHandler={handleSubmit} />
				<main>
					<Switch>
						<Route path="/video/:id" component={VideoDetails} />

						<Route exact path="/">
							<VideoList list={videos} />
						</Route>

						<Route component={NotFound} />
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;
