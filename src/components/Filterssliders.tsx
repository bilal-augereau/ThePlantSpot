import { useCallback, useEffect, useState } from "react";
import PlantList, {
	getLightDifficulty,
	getWateringDifficulty,
	getTemperatureDifficulty,
	getGrowthDifficulty,
	getPruningDifficulty,
	calculateAverageDifficulty,
} from "./PlantList.tsx";
import "./Filterssliders.css"; // Assure-toi que le fichier CSS contient les styles nécessaires
import type { Plant } from "../pages/Search.tsx";

const Filterssliders = ({
	plants,
	setFilteredPlants,
}: { plants: Plant[]; setFilteredPlants: (plants: Plant[]) => void }) => {
	const [valueToleredlight, setValueToleredlight] = useState<number>(1);
	const [valueWatering, setValueWatering] = useState<number>(1);
	const [valueTemperaturerange, setValueTemperaturerange] = useState<number>(1);
	const [valueGrowth, setValueGrowth] = useState<number>(1);
	const [valuePruning, setValuePruning] = useState<number>(1);
	const [valueDifficulty, setValueDifficulty] = useState<number>(1);

	const [interactedToleredlight, setInteractedToleredlight] =
		useState<boolean>(false);
	const [interactedWatering, setInteractedWatering] = useState<boolean>(false);
	const [interactedTemperaturerange, setInteractedTemperaturerange] =
		useState<boolean>(false);
	const [interactedGrowth, setInteractedGrowth] = useState<boolean>(false);
	const [interactedPruning, setInteractedPruning] = useState<boolean>(false);
	const [interactedDifficulty, setInteractedDifficulty] =
		useState<boolean>(false);

	const choicesToleredlight = [
		"Diffuse light ( Less than 5,300 lux / 500 fc)", // Facile
		"Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)", // Moyenne
		"Full sun (+21,500 lux /+2000 fc )", // Difficile
	];

	const choicesWatering = [
		"Change water regularly in the cup & Water when soil is half dry", // Facile
		"Water when soil is half dry & Can dry between watering", // Moyenne
		"Keep moist between watering & Must not dry between watering", // Difficile
	];

	const choicesTemperaturerange = [
		"Warm (25°C and above)", // Facile
		"Moderate (15-25°C)", // Moyenne
		"Cold (Less than 15°C)", // Difficile
	];

	const choicesGrowth = [
		"Slow", // Difficile
		"Regular", // Moyenne
		"Fast", // Facile
	];

	const choicesPruning = [
		"Never", // Facile
		"After blooming", // Moyenne
		"If needed", // Difficile
	];

	const choicesDifficulty = [
		"Facile", // Facile
		"Moyenne", // Moyenne
		"Difficile", // Difficile
	];

	// Fonction de gestion des changements de valeur des sliders
	const handleToleredlightChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setValueToleredlight(Number.parseInt(event.target.value));
		setInteractedToleredlight(true); // Marquer comme interagi
	};
	const handleWateringChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValueWatering(Number.parseInt(event.target.value));
		setInteractedWatering(true);
	};
	const handleTemperaturerangeChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setValueTemperaturerange(Number.parseInt(event.target.value));
		setInteractedTemperaturerange(true);
	};
	const handleGrowthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValueGrowth(Number.parseInt(event.target.value));
		setInteractedGrowth(true);
	};
	const handlePruningChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValuePruning(Number.parseInt(event.target.value));
		setInteractedPruning(true);
	};
	const handleDifficultyChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setValueDifficulty(Number.parseInt(event.target.value));
		setInteractedDifficulty(true);
	};

	const resetFilters = () => {
		setValueToleredlight(1);
		setValueWatering(1);
		setValueTemperaturerange(1);
		setValueGrowth(1);
		setValuePruning(1);
		setValueDifficulty(1);

		setInteractedToleredlight(false);
		setInteractedWatering(false);
		setInteractedTemperaturerange(false);
		setInteractedGrowth(false);
		setInteractedPruning(false);
		setInteractedDifficulty(false);
	};

	// Fonction de filtrage des plantes
	const filterPlants = useCallback(() => {
		return plants.filter((plant) => {
			let lightMatch = true;
			let wateringMatch = true;
			let tempMatch = true;
			let growthMatch = true;
			let pruningMatch = true;
			let difficultyMatch = true;

			if (interactedToleredlight) {
				lightMatch =
					getLightDifficulty(plant["Light tolered"]) === valueToleredlight;
			}
			if (interactedWatering) {
				wateringMatch = getWateringDifficulty(plant.Watering) === valueWatering;
			}
			if (interactedTemperaturerange) {
				tempMatch =
					getTemperatureDifficulty(
						plant["Temperature min"].C,
						plant["Temperature max"].C,
					) === valueTemperaturerange;
			}
			if (interactedGrowth) {
				growthMatch = getGrowthDifficulty(plant.Growth) === valueGrowth;
			}
			if (interactedPruning) {
				pruningMatch = getPruningDifficulty(plant.Pruning) === valuePruning;
			}
			if (interactedDifficulty) {
				difficultyMatch =
					Math.round(calculateAverageDifficulty(plant)) === valueDifficulty;
			}

			return (
				lightMatch &&
				wateringMatch &&
				tempMatch &&
				growthMatch &&
				pruningMatch &&
				difficultyMatch
			);
		});
	}, [
		plants,
		valueToleredlight,
		valueWatering,
		valueTemperaturerange,
		valueGrowth,
		valuePruning,
		valueDifficulty,
		interactedToleredlight,
		interactedWatering,
		interactedTemperaturerange,
		interactedGrowth,
		interactedPruning,
		interactedDifficulty,
	]);

	useEffect(() => {
		const filtered = filterPlants();
		setFilteredPlants(filtered);
	}, [filterPlants, setFilteredPlants]);

	const getSliderClass = (interacted: boolean) => {
		return interacted ? "slider active" : "slider inactive";
	};

	return (
		<>
			<h1>Slider pour choisir un niveau</h1>
			<p>Déplacez les curseurs pour filtrer les choix disponibles.</p>
			<div className="sliders-container">
				<div className="slideritem">
					<h3>Tolered Light</h3>
					<input
						type="range"
						min="1"
						max="3"
						value={valueToleredlight}
						onChange={handleToleredlightChange}
						className={getSliderClass(interactedToleredlight)}
					/>
					<p>
						Choix sélectionné :{" "}
						<strong>{choicesToleredlight[valueToleredlight - 1]}</strong>
					</p>
				</div>

				<div className="slideritem">
					<h3>Watering</h3>
					<input
						type="range"
						min="1"
						max="3"
						value={valueWatering}
						onChange={handleWateringChange}
						className={getSliderClass(interactedWatering)}
					/>
					<p>
						Choix sélectionné :{" "}
						<strong>{choicesWatering[valueWatering - 1]}</strong>
					</p>
				</div>

				<div className="slideritem">
					<h3>Temperature range</h3>
					<input
						type="range"
						min="1"
						max="3"
						value={valueTemperaturerange}
						onChange={handleTemperaturerangeChange}
						className={getSliderClass(interactedTemperaturerange)}
					/>
					<p>
						Choix sélectionné :{" "}
						<strong>
							{choicesTemperaturerange[valueTemperaturerange - 1]}
						</strong>
					</p>
				</div>

				<div className="slideritem">
					<h3>Growth</h3>
					<input
						type="range"
						min="1"
						max="3"
						value={valueGrowth}
						onChange={handleGrowthChange}
						className={getSliderClass(interactedGrowth)}
					/>
					<p>
						Choix sélectionné :{" "}
						<strong>{choicesGrowth[valueGrowth - 1]}</strong>
					</p>
				</div>

				<div className="slideritem">
					<h3>Pruning</h3>
					<input
						type="range"
						min="1"
						max="3"
						value={valuePruning}
						onChange={handlePruningChange}
						className={getSliderClass(interactedPruning)}
					/>
					<p>
						Choix sélectionné :{" "}
						<strong>{choicesPruning[valuePruning - 1]}</strong>
					</p>
				</div>

				<div className="slideritem">
					<h3>Difficulty</h3>
					<input
						type="range"
						min="1"
						max="3"
						value={valueDifficulty}
						onChange={handleDifficultyChange}
						className={getSliderClass(interactedDifficulty)}
					/>
					<p>
						Choix sélectionné :{" "}
						<strong>{choicesDifficulty[valueDifficulty - 1]}</strong>
					</p>
				</div>
				<button type="button" onClick={resetFilters} className="reset-button">
					RESET
				</button>
			</div>
		</>
	);
};

export default Filterssliders;
