import { useState } from "react";
import "./SearchBar.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importation des icônes Font Awesome

interface SearchBarProps {
	onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const term = event.target.value;
		setSearchTerm(term);
		onSearch(term);
	};

	return (
		<div className="search-bar-container">
			<i className="fas fa-seedling search-icon" />
			<input
				type="text"
				className="search-bar"
				placeholder="Search a plant..."
				value={searchTerm}
				onChange={handleChange}
			/>
		</div>
	);
};

export default SearchBar;
