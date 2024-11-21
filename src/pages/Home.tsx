import "./Home.css";
import Photo from "../img/illustrations/GreenIllustrated.png";
const Home = () => {
	return (
		// biome-ignore lint/a11y/useHtmlLang: <explanation>
		<html>
			<body>
				<div className="upper-body">
					<div className="Textes">
						<h2 className="green-path"> The green path </h2>
						<h3 className="find-spot">
							<br />
							Where Every Plant Find Its Spot
						</h3>
					</div>
					<img className="woman-ia" src={Photo} alt="green" />
				</div>
				<div className="texte-quizz">
					<div className="texte-column">
						<h3 className="Title-we-are"> Who we are</h3>
						<p className="blablabla">
							The Plant Spot is a user-friendly online platform designed to help
							plant enthusiasts of all levels find the ideal houseplants for
							their homes, based on specific needs, preferences, and
							environmental conditions. Whether you're a seasoned plant parent
							or a beginner looking for your first indoor garden, The Plant Spot
							offers tailored recommendations to ensure your plants thrive in
							your unique space.
						</p>
					</div>

					<hr className="line-column" />
					<div className="quizz-part">
						<h3 className="QUIZZ">QUIZZ</h3>
						<article className="card" />
					</div>
				</div>
			</body>
		</html>
	);
};

export default Home;
