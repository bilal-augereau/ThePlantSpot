import { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../JS-Paris-P2-ThePlantSpot/src/pages/Home.tsx";
import Search from "../../JS-Paris-P2-ThePlantSpot/src/pages/Search.tsx";
import SearchBar from "./components/SearchBar.tsx";

interface Plant {
	name: string;
	"Temperature max": { C?: number };
	"Temperature min": { C?: number };
}

function App() {
	const [Plant, setPlant] = useState<Plant[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [filteredData, setFilteredData] = useState<Plant[]>([]);

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
					throw new Error(
						"Une erreur s'est produite lors de la récupération des données",
					);
				}
				return response.json();
			})
			.then((data) => {
				setPlant(data);
				setFilteredData(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	const handleSearch = (searchTerm: string) => {
		if (Plant) {
			const results = Plant.filter((item) =>
				item.name?.toLowerCase().includes(searchTerm.toLowerCase()),
			);
			setFilteredData(results);
		}
	};

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
						c
						<li>
							<Link to="/search">Search</Link>
						</li>
					</ul>
				</nav>
				<main>
					<SearchBar onSearch={handleSearch} />
				</main>

				{/* Définir les Routes */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
				</Routes>

				<div>
					<h1>Liste des Plantes</h1>
					<ul>
						{filteredData.map((item) => (
							<li key={item.name}>
								{item["Temperature max"]?.C && item["Temperature min"]?.C ? (
									<span>
										{item["Temperature max"].C - item["Temperature min"].C}°C
									</span>
								) : item["Temperature max"]?.C &&
									!item["Temperature min"]?.C ? (
									<span>
										{item["Temperature max"].C}°C (Min temperature data not
										available)
									</span>
								) : (
									<span>Temperature data not available</span>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</Router>
	);
}

export default App;
