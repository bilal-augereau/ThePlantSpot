import { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../JS-Paris-P2-ThePlantSpot/src/pages/Home.tsx";
import Search from "../../JS-Paris-P2-ThePlantSpot/src/pages/Search.tsx";
import PlantList from "./components/PlantList.tsx";

function App() {
	const [plants, setPlants] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

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
				type Plant = {
					id: number;
					Family: string;
					"Light tolered": string;
					Watering: string;
					"Temperature max": number;
					"Temperature min": number;
					Growth: string;
					Pruning: string;
					Difficulties: string;
					C: number;
					Img: string;
					"Common name": string;
					"Latin name": string;
				};

				const formattedData = data.map((plant: Plant) => ({
					id: plant.id,
					Family: plant.Family || "",
					"Light tolered": plant["Light tolered"] || "",
					Watering: plant.Watering || "",
					"Temperature max": plant["Temperature max"] || 0,
					"Temperature min": plant["Temperature min"] || 0,
					Growth: plant.Growth || "",
					Pruning: plant.Pruning || "",
					Difficulties: plant.Difficulties || "",
					C: plant.C || 0,
					Img: plant.Img || "",
					"Common name": plant["Common name"] || "",
					"Latin name": plant["Latin name"] || "",
				}));
				setPlants(formattedData);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
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
							<Link to="/search">Search</Link>
						</li>
					</ul>
				</nav>
				{/* Routes */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
				</Routes>
				{/* Liste des plantes */}
				<div>
					<h1>Liste des Plantes</h1>
					<div className="plant-card">
						<table>
							<thead>
								<tr>
									<th>IMG</th>
									<th>Common Name / Family / Latin Name</th>
									<th>Light tolered</th>
									<th>Watering</th>
									<th>Temperature</th>
									<th>Growth</th>
									<th>Pruning</th>
									<th>Difficulties</th>
								</tr>
							</thead>
							<tbody>
								{plants.map((plant) => (
									<PlantList key={plant.id} plant={plant} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
