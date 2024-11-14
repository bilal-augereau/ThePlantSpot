import "./App.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../JS-Paris-P2-ThePlantSpot/src/pages/Home.tsx";
import Search from "../../JS-Paris-P2-ThePlantSpot/src/pages/Search.tsx";

function App() {
	return (
		<Router>
			<div>
				{/* Navigation */}
				<nav>
					<ul>
						<li>
							<Link to="/">Accueil</Link>
						</li>
						<li>
							<Link to="/search">Search</Link>
						</li>
					</ul>
				</nav>
				{/* Routes */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
