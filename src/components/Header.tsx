import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/illustrations/Logo.png";
import "./Header.css";

const Header = () => {
	const [navbarColor, setNavbarColor] = useState("#94ab6F");

	const interpolateColor = useCallback(
		(color1: string, color2: string, factor: number): string => {
			const c1 = color1
				.match(/\w\w/g)
				?.map((hex) => Number.parseInt(hex, 16)) || [0, 0, 0];
			const c2 = color2
				.match(/\w\w/g)
				?.map((hex) => Number.parseInt(hex, 16)) || [0, 0, 0];
			const result = c1.map((start, i) =>
				Math.round(start + (c2[i] - start) * factor),
			);

			return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
		},
		[],
	);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const maxScroll = 1000;
			const factor = Math.min(scrollY / maxScroll, 1);
			const newColor = interpolateColor("#94ab6f", "#435823", factor);
			setNavbarColor(newColor);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [interpolateColor]);

	return (
		<nav style={{ backgroundColor: navbarColor }}>
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
				<li className="contact">Contact </li>{" "}
				<li className="catalogue">
					<Link to="/Search"> Catalogue </Link>{" "}
				</li>
			</ul>
		</nav>
	);
};

export default Header;
