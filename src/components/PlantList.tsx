import "./PlantList.css";
import difficultiesImg from "../img/picto/difficulties.png";
import difficultiesBWImg from "../img/picto/difficultiesBW.png";
import dropImg from "../img/picto/drop.png";
import dropBWImg from "../img/picto/dropBW.png";
import growthImg from "../img/picto/hibiscus.png";
import growthBWImg from "../img/picto/hibiscusBW.png";
import pruningImg from "../img/picto/pruning-shears.png";
import pruningBWImg from "../img/picto/pruning-shearsBW.png";
import sunImg from "../img/picto/sun.png";
import sunBWImg from "../img/picto/sunBW.png";
import thermometerImg from "../img/picto/thermometer.png";
import thermometerBWImg from "../img/picto/thermometerBW.png";
import type { Plant } from "../pages/Search.tsx";

const getLightDifficulty = (lightType: string): number => {
	switch (lightType) {
		case "Full sun (+21,500 lux /+2000 fc )":
			return 3; // Difficile
		case "Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)":
			return 2; // Moyenne
		case "Diffuse light ( Less than 5,300 lux / 500 fc)":
			return 1; // Facile
		default:
			return 0;
	}
};

const getWateringDifficulty = (wateringType: string): number => {
	switch (wateringType) {
		case "Keep moist between watering & Must not dry between watering":
			return 2; // Moyenne
		case "Water when soil is half dry & Can dry between watering":
			return 1; // Facile
		case "Change water regularly in the cup & Water when soil is half dry":
			return 3; // Difficile
		case "Must dry between watering & Water only when dry":
			return 1; // Facile
		case "Water when soil is half dry & Change water regularly in the cup":
			return 3; // Difficile
		default:
			return 0;
	}
};

const getTemperatureDifficulty = (minTemp: number, maxTemp: number): number => {
	if (minTemp === undefined || maxTemp === undefined) return 0;

	const range = maxTemp - minTemp;
	if (range < 15) {
		return 3; // Difficile
	}
	if (range >= 15 && range < 25) {
		return 2; // Moyenne
	}
	if (range >= 25) {
		return 1; // Facile
	}
	return 0;
};

const getGrowthDifficulty = (growthType: string): number => {
	switch (growthType) {
		case "Slow":
			return 3; // Difficile
		case "Regular":
		case "Seasonal":
			return 2; // Moyenne
		case "Fast":
			return 1; // Facile
		default:
			return 0;
	}
};

const getPruningDifficulty = (pruningType: string): number => {
	switch (pruningType) {
		case "Never":
			return 1; // Facile
		case "After blooming":
			return 2; // Moyenne
		case "If needed":
			return 3; // Difficile
		default:
			return 0;
	}
};

const calculateAverageDifficulty = (plant: Plant): number => {
	const lightDifficulty = getLightDifficulty(plant["Light tolered"]);
	const wateringDifficulty = getWateringDifficulty(plant.Watering);
	const temperatureDifficulty = getTemperatureDifficulty(
		plant["Temperature min"].C,
		plant["Temperature max"].C,
	);
	const growthDifficulty = getGrowthDifficulty(plant.Growth);
	const pruningDifficulty = getPruningDifficulty(plant.Pruning);

	const totalDifficulty =
		lightDifficulty +
		wateringDifficulty +
		temperatureDifficulty +
		growthDifficulty +
		pruningDifficulty;
	const averageDifficulty = totalDifficulty / 5;
	return averageDifficulty;
};

const getDifficultyImage = (averageDifficulty: number) => {
	if (averageDifficulty <= 1.5) {
		return [difficultiesImg, difficultiesBWImg, difficultiesBWImg]; // Facile
	}
	if (averageDifficulty > 1.5 && averageDifficulty <= 3) {
		return [difficultiesImg, difficultiesImg, difficultiesBWImg]; // Moyenne
	}
	if (averageDifficulty > 3) {
		return [difficultiesImg, difficultiesImg, difficultiesImg]; // Difficile
	}
	return null;
};

const getLightImage = (lightType: string) => {
	switch (lightType) {
		case "Diffuse light ( Less than 5,300 lux / 500 fc)":
			return [sunImg, sunBWImg, sunBWImg];
		case "Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)":
			return [sunImg, sunImg, sunBWImg];
		case "Full sun (+21,500 lux /+2000 fc )":
			return [sunImg, sunImg, sunImg];
		default:
			return null;
	}
};

const getDropImage = (dropType: string) => {
	if (
		dropType.includes("half dry & Can dry") ||
		dropType.includes("watering & Water only when dry")
	) {
		return [dropImg, dropBWImg, dropBWImg];
	}
	if (dropType.includes("Keep moist between")) {
		return [dropImg, dropImg, dropBWImg];
	}
	if (
		dropType.includes("in the cup & Water") ||
		dropType.includes("half dry & Change water")
	) {
		return [dropImg, dropImg, dropImg];
	}
	return null;
};

const getGrowthImage = (growthType: string) => {
	switch (growthType) {
		case "Slow":
			return [growthImg, growthBWImg, growthBWImg];
		case "Regular":
		case "Seasonal":
			return [growthImg, growthImg, growthBWImg];
		case "Fast":
			return [growthImg, growthImg, growthImg];
		default:
			return null;
	}
};

const getPruningImage = (pruningType: string) => {
	switch (pruningType) {
		case "Never":
			return [pruningImg, pruningBWImg, pruningBWImg];
		case "After blooming":
			return [pruningImg, pruningImg, pruningBWImg];
		case "If needed":
			return [pruningImg, pruningImg, pruningImg];
		default:
			return null;
	}
};

const getTemperatureImage = (minTemp: number, maxTemp: number) => {
	const range = maxTemp - minTemp;
	if (range < 15) {
		return [thermometerImg, thermometerBWImg, thermometerBWImg];
	}
	if (range >= 15 && range < 25) {
		return [thermometerImg, thermometerImg, thermometerBWImg];
	}
	if (range >= 25) {
		return [thermometerImg, thermometerImg, thermometerImg];
	}
	return null;
};

const PlantList = ({ plant }) => {
	const averageDifficulty = calculateAverageDifficulty(plant);
	return (
		<tr key={plant.id}>
			<td>
				<img
					className="imgplant"
					src={plant.Img}
					alt={plant.Family}
					width="100"
				/>
			</td>
			<td>
				<p className="commonname">{plant["Common name"]}</p>
				<p className="plantfamily">{plant.Family}</p>
				<p className="latinname">{plant["Latin name"]}</p>
			</td>

			<td>
				{getLightImage(plant["Light tolered"])?.map((image, index) => (
					<img
						key={`Light tolered ${plant.id}-${index}`}
						src={image}
						alt={plant["Light tolered"]}
						width="35"
						title={plant["Light tolered"]}
					/>
				))}
			</td>
			<td>
				{getDropImage(plant.Watering)?.map((image, index) => (
					<img
						key={`Watering ${plant.id}-${index}`}
						src={image}
						alt={plant.Watering}
						width="35"
						title={`${plant.Watering}`}
					/>
				))}
			</td>
			<td>
				{getTemperatureImage(
					plant["Temperature min"].C,
					plant["Temperature max"].C,
				)?.map((image, index) => (
					<img
						key={`Temperature ${plant.id}-${index}`}
						src={image}
						alt="Temperature"
						width="35"
						title={`${plant.Watering}`}
					/>
				))}
			</td>
			<td>
				{getGrowthImage(plant.Growth)?.map((image, index) => (
					<img
						key={`Growth ${plant.id}-${index}`}
						src={image}
						alt={plant.Growth}
						width="35"
						title={`${plant.Growth}`}
					/>
				))}
			</td>
			<td>
				{getPruningImage(plant.Pruning)?.map((image, index) => (
					<img
						key={`Pruning ${plant.id}-${index}`}
						src={image}
						alt={plant.Pruning}
						width="35"
						title={`${plant.Pruning}`}
					/>
				))}
			</td>

			<td>
				{getDifficultyImage(averageDifficulty)?.map((image, index) => (
					<img
						key={`Difficulty ${plant.id}-${index}`}
						src={image}
						alt="Difficulty"
						width="35"
					/>
				))}
			</td>
		</tr>
	);
};
export {
	getLightDifficulty,
	getWateringDifficulty,
	getTemperatureDifficulty,
	getGrowthDifficulty,
	getPruningDifficulty,
	calculateAverageDifficulty,
};
export default PlantList;
