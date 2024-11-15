import "./App.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
	return (
		<Router>
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
			</div>
		</Router>
	);
}

export default App;
