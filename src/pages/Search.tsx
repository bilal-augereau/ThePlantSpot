import { useState } from "react";
import SearchBar from "../components/SearchBar";
import "../components/SearchBar.css";

interface Plant {
	id: number;
	name: string;
	"Temperature max"?: { C?: number };
	"Temperature min"?: { C?: number };
}

interface SearchProps {
	plants: Plant[];
}

const Search = ({ plants }: SearchProps) => {
	const [filteredData, setFilteredData] = useState<Plant[]>(plants);

	// Fonction de recherche
	const handleSearch = (searchTerm: string) => {
		const results = plants.filter((item) =>
			item.name.toLowerCase().includes(searchTerm.toLowerCase()),
		);
		setFilteredData(results);
	};

	return (
		<div>
			<h1>Page de recherche</h1>
			<SearchBar onSearch={handleSearch} />
			<ul>
				{filteredData.map((item) => (
					<li key={item.id}>
						{item["Temperature max"]?.C && item["Temperature min"]?.C ? (
							<span>
								{item["Temperature max"].C - item["Temperature min"].C}°C
							</span>
						) : item["Temperature max"]?.C ? (
							<span>
								{item["Temperature max"].C}°C (données de température minimale
								non disponibles)
							</span>
						) : (
							<span>Données de température non disponibles</span>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Search;
