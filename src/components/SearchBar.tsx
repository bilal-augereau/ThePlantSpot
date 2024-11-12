import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

interface SearchBarProps {
	onSearch: (searchTerm: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
	const [searchTerm, setSearchTerm] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
		onSearch(event.target.value);
	};

	return (
		<div className="search-bar-container">
			<input
				className="search-bar-input"
				type="text"
				placeholder="Search a plant..."
				value={searchTerm}
				onChange={handleChange}
			/>
			<button className="search-bar-button" type="button">
				<FaSearch />
			</button>
		</div>
	);
}

export default SearchBar;
