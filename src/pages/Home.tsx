import "../Home.css";
import Quiz from "../components/Quiz";

const Home = () => {
	return (
		<div className="home-container">
			<div className="first-paragraph">
				<h1>Who we are ?</h1>
				<p>
					The Plant Spot is a user-friendly online platform designed to help
					plant enthusiasts of all levels find the ideal houseplants for their
					homes, based on specific needs, preferences, and environmental
					conditions. Whether you're a seasoned plant parent or a beginner
					looking for your first indoor garden, The Plant Spot offers tailored
					recommendations to ensure your plants thrive in your unique space.
				</p>
			</div>
			<h2>Quiz</h2>
			<Quiz />
		</div>
	);
};

export default Home;
