import { useCallback, useEffect, useState } from "react";
import {
	calculateAverageDifficulty,
	getGrowthDifficulty,
	getLightDifficulty,
	getPruningDifficulty,
	getTemperatureDifficulty,
	getWateringDifficulty,
} from "./PlantList.tsx";
import "./Filterssliders.css";
import type { Plant } from "../pages/Search.tsx";

const Filterssliders = ({
	plants,
	setDisplayedPlants,
}: { plants: Plant[]; setDisplayedPlants: (plants: Plant[]) => void }) => {
	const [valueToleredlight, setValueToleredlight] = useState<number>(0);
	const [valueWatering, setValueWatering] = useState<number>(0);
	const [valueTemperaturerange, setValueTemperaturerange] = useState<number>(0);
	const [valueGrowth, setValueGrowth] = useState<number>(0);
	const [valuePruning, setValuePruning] = useState<number>(0);
	const [valueDifficulty, setValueDifficulty] = useState<number>(0);

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
		"", // Neutre
		"Diffuse light ( Less than 5,300 lux / 500 fc)", // Facile
		"Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)", // Moyenne
		"Full sun (+21,500 lux /+2000 fc )", // Difficile
	];

	const choicesWatering = [
		"", // Neutre
		"Change water regularly in the cup & Water when soil is half dry", // Facile
		"Water when soil is half dry & Can dry between watering", // Moyenne
		"Keep moist between watering & Must not dry between watering", // Difficile
	];

	const choicesTemperaturerange = [
		"", // Neutre
		"Warm (25°C and above)", // Facile
		"Moderate (15-25°C)", // Moyenne
		"Cold (Less than 15°C)", // Difficile
	];

	const choicesGrowth = [
		"", // Neutre
		"Slow", // Difficile
		"Regular", // Moyenne
		"Fast", // Facile
	];

	const choicesPruning = [
		"", // Neutre
		"Never", // Facile
		"After blooming", // Moyenne
		"If needed", // Difficile
	];

	const choicesDifficulty = [
		"", // Neutre
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
		setInteractedToleredlight(event.target.value !== "0");
	};
	const handleWateringChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValueWatering(Number.parseInt(event.target.value));
		setInteractedWatering(true);
		setInteractedWatering(event.target.value !== "0");
	};
	const handleTemperaturerangeChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setValueTemperaturerange(Number.parseInt(event.target.value));
		setInteractedTemperaturerange(true);
		setInteractedTemperaturerange(event.target.value !== "0");
	};
	const handleGrowthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValueGrowth(Number.parseInt(event.target.value));
		setInteractedGrowth(true);
		setInteractedGrowth(event.target.value !== "0");
	};
	const handlePruningChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValuePruning(Number.parseInt(event.target.value));
		setInteractedPruning(true);
		setInteractedPruning(event.target.value !== "0");
	};
	const handleDifficultyChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setValueDifficulty(Number.parseInt(event.target.value));
		setInteractedDifficulty(true);
		setInteractedDifficulty(event.target.value !== "0");
	};

	const resetFilters = () => {
		setValueToleredlight(0);
		setValueWatering(0);
		setValueTemperaturerange(0);
		setValueGrowth(0);
		setValuePruning(0);
		setValueDifficulty(0);

		setInteractedToleredlight(false);
		setInteractedWatering(false);
		setInteractedTemperaturerange(false);
		setInteractedGrowth(false);
		setInteractedPruning(false);
		setInteractedDifficulty(false);
	};

	// filtrage des plantes
	const filterPlants = useCallback(() => {
		return plants.filter((plant) => {
			let lightMatch = true;
			let wateringMatch = true;
			let tempMatch = true;
			let growthMatch = true;
			let pruningMatch = true;
			let difficultyMatch = true;

			if (interactedToleredlight && valueToleredlight !== 0) {
				lightMatch =
					getLightDifficulty(plant["Light tolered"]) === valueToleredlight;
			}
			if (interactedWatering && valueWatering !== 0) {
				wateringMatch = getWateringDifficulty(plant.Watering) === valueWatering;
			}
			if (interactedTemperaturerange && valueTemperaturerange !== 0) {
			const tempMatch =
					getTemperatureDifficulty(
						plant["Temperature min"].value,
						plant["Temperature max"].value,
					) === valueTemperaturerange;
			}
			if (interactedGrowth && valueGrowth !== 0) {
				growthMatch = getGrowthDifficulty(plant.Growth) === valueGrowth;
			}
			if (interactedPruning && valuePruning !== 0) {
				pruningMatch = getPruningDifficulty(plant.Pruning) === valuePruning;
			}
			if (interactedDifficulty && valueDifficulty !== 0) {
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
		setDisplayedPlants(filtered);
	}, [filterPlants, setDisplayedPlants]);

	const getSliderClass = (interacted: boolean) => {
		return interacted ? "slider active" : "slider inactive";
	};

	return (
		<>
			<div className="sliders-container">
				<div className="slideritem">
					<h3>Tolered Light</h3>
					<input
						type="range"
						min="0"
						max="3"
						value={valueToleredlight}
						onChange={handleToleredlightChange}
						className={getSliderClass(interactedToleredlight)}
					/>
					<p>
						<strong>{choicesToleredlight[valueToleredlight]}</strong>
					</p>
				</div>

				<div className="slideritem">
					<h3>Watering</h3>
					<input
						type="range"
						min="0"
						max="3"
						value={valueWatering}
						onChange={handleWateringChange}
						className={getSliderClass(interactedWatering)}
					/>
					<p>
						<strong>{choicesWatering[valueWatering]}</strong>
					</p>
				</div>

				<div className="slideritem">
					<h3>Temperature range</h3>
					<input
						type="range"
						min="0"
						max="3"
						value={valueTemperaturerange}
						onChange={handleTemperaturerangeChange}
						className={getSliderClass(interactedTemperaturerange)}
					/>
					<p>
						<strong>{choicesTemperaturerange[valueTemperaturerange]}</strong>
					</p>
				</div>

				<div className="slideritem">
					<h3>Growth</h3>
					<input
						type="range"
						min="0"
						max="3"
						value={valueGrowth}
						onChange={handleGrowthChange}
						className={getSliderClass(interactedGrowth)}
					/>
					<p>
						<strong>{choicesGrowth[valueGrowth]}</strong>
					</p>
				</div>

				<div className="slideritem">
					<h3>Pruning</h3>
					<input
						type="range"
						min="0"
						max="3"
						value={valuePruning}
						onChange={handlePruningChange}
						className={getSliderClass(interactedPruning)}
					/>
					<p>
						<strong>{choicesPruning[valuePruning]}</strong>
					</p>
				</div>

				<div className="slideritem">
					<h3>Difficulty</h3>
					<input
						type="range"
						min="0"
						max="3"
						value={valueDifficulty}
						onChange={handleDifficultyChange}
						className={getSliderClass(interactedDifficulty)}
					/>
					<p>
						<strong>{choicesDifficulty[valueDifficulty]}</strong>
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
