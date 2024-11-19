import { Link } from "react-router-dom";
import logo from "../img/illustrations/Logo.png";
import "./Header.css";

const Header = () => {
	return (
		<nav>
			<div className="column-logo">
				<img src={logo} alt="logo" className="Logo" />

				<div className="ho-ligne" />
			</div>

			<h1>
				The Plant <span style={{ fontWeight: "bold" }}>Spot</span>
			</h1>

			<hr />
			<ul className="liste-lien">
				<li className="house-green">
					{" "}
					<Link to="/"> Home </Link>
				</li>{" "}
				<li className="contact">
					<Link to="/Search">Contact </Link>{" "}
				</li>{" "}
				<li className="catalogue">Catalogue</li>
			</ul>
		</nav>
	);
};

export default Header;
