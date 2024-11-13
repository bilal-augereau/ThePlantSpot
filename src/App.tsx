import { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../JS-Paris-P2-ThePlantSpot/src/pages/Home";
import Search from "../../JS-Paris-P2-ThePlantSpot/src/pages/Search";

interface Plant {
	id: number;
	name: string;
	"Temperature max"?: { C?: number };
	"Temperature min"?: { C?: number };
}

function App() {
	const [plants, setPlants] = useState<Plant[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Récupération des données
	useEffect(() => {
		const url = "https://house-plants2.p.rapidapi.com/all";
		const options = {
			method: "GET",
			headers: {
				"x-rapidapi-key": "9db15f58b8msh5101d3f3e72beaep175fadjsn258b615b608e",
				"x-rapidapi-host": "house-plants2.p.rapidapi.com",
			},
		};

		fetch(url, options)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Erreur lors de la récupération des données");
				}
				return response.json();
			})
			.then((data) => {
				setPlants(data);
			})
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <div>Chargement...</div>;
	if (error) return <div>Erreur: {error}</div>;

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
							<Link to="/search">Recherche</Link>
						</li>
					</ul>
				</nav>

				{/* Définition des routes */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search plants={plants} />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
