import "./App.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
<<<<<<< HEAD
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
=======
import Home from "../../JS-Paris-P2-ThePlantSpot/src/pages/Home.tsx";
import Search from "../../JS-Paris-P2-ThePlantSpot/src/pages/Search.tsx";
>>>>>>> d177298129cd1e74a903b96765a47b5865b5ca06

function App() {
	return (
		<Router>
<<<<<<< HEAD
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100vh",
				}}
			>
				<Link to="/">Home</Link>
				<Link to="/search">Search</Link>
				<Link to="/plants">Plants</Link>

				<div style={{ flex: 1 }}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/search" element={<Search />} />
						<Route
							path="/plants"
							element={
								<div>
									<h1>Liste des Plantes</h1>
								</div>
							}
						/>
					</Routes>
				</div>
				<Footer />
=======
			<div>
				{/* Navigation */}
				<nav>
					<ul>
						<li>
							<Link to="/">Accueil</Link>
						</li>
						<li>
							<Link to="/search">Recherche</Link>
						</li>
					</ul>
				</nav>
				{/* Routes */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
				</Routes>
>>>>>>> d177298129cd1e74a903b96765a47b5865b5ca06
			</div>
		</Router>
	);
}

export default App;
