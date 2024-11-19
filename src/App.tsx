import "./App.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import PlantList from "./components/PlantList";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
	return (
		<Router>
			<div className="app-container">
				<nav>
					<ul className="nav">
						<li>
							<Link to="/">Accueil</Link>
						</li>
						<li>
							<Link to="/search">Recherche</Link>
						</li>
						<li>
							<Link to="/plants">Plantes</Link>
						</li>
					</ul>
				</nav>
				<div className="main-content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/search" element={<Search />} />
						<Route path="/plants" element={<PlantList />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
