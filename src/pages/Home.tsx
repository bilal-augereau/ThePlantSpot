import "./Home.css";
import Photo from "../img/illustrations/GreenIllustrated.png";
const Home = () => {
	return (
		// biome-ignore lint/a11y/useHtmlLang: <explanation>
		<html style={{ backgroundColor: "#94AB6F" }}>
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
				<div className="lower-body" style={{}}>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<h3
							style={{
								fontSize: "30px",
								fontWeight: "bold",
								paddingRight: "5rem",
							}}
						>
							{" "}
							Who we are
						</h3>
						<p style={{ width: "40ch" }}>
							The Plant Spot is a user-friendly online platform designed to help
							plant enthusiasts of all levels find the ideal houseplants for
							their homes, based on specific needs, preferences, and
							environmental conditions. Whether you're a seasoned plant parent
							or a beginner looking for your first indoor garden, The Plant Spot
							offers tailored recommendations to ensure your plants thrive in
							your unique space.
						</p>
					</div>

					<hr
						style={{
							height: "200px",
							marginTop: "7rem",
						}}
					/>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginRight: "7.5rem",
						}}
					>
						<h3 style={{ fontSize: "30px", fontWeight: "bold" }}>QUIZZ</h3>
					</div>
				</div>
				<div style={{ backgroundColor: "#FBF6F1" }}>
					<h3
						style={{
							display: "flex",
							justifyContent: "left",
							color: "#000000",
							marginLeft: "3rem",
							fontSize: "60px",
						}}
					>
						Most Popular Plants !
					</h3>
				</div>
			</body>
		</html>
	);
};

export default Home;
