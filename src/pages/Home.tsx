import "./Home.css";
import Quiz from "../components/Quiz";
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
				<>
					<h2> site</h2>
					<Quiz />
				</>
			</body>
		</html>
	);
};

export default Home;
