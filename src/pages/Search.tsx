import { useEffect, useState } from "react";
import "../components/PlantList.css";
import PlantList from "../components/PlantList.tsx";
import SearchBar from "../components/SearchBar.tsx";
import "../components/SearchBar.css";

const Search = () => {
	const [plants, setPlants] = useState([]);
	const [filteredPlants, setFilteredPlants] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const handleSearch = (searchTerm: string) => {
		const filtered = plants.filter((plant) =>
			plant["Common name"][0]?.toLowerCase().includes(searchTerm.toLowerCase()),
		);
		setFilteredPlants(filtered);
	};

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
				setFilteredPlants(formattedData);
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
		<>
			<h1>Page de recherche</h1>
			<SearchBar onSearch={handleSearch} />

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
							{filteredPlants.map((plant) => (
								<PlantList key={plant.id} plant={plant} />
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Search;
