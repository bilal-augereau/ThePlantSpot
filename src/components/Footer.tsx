import type React from "react";
import logoFace from "../img/picto/Face.png";
import logoInsta from "../img/picto/Insta.png";
import logolink from "../img/picto/link.png";

const Footer = () => {
	return (
		<footer
			style={{
				bottom: 0,
				left: 0,
				width: "100%",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "20px",
				backgroundColor: "#94AB6F",
				color: "#FFFFFF",
				marginTop: "auto",
			}}
		>
			<div
				style={{
					flex: "0 1 auto",
					textAlign: "left",
				}}
			>
				<p style={{ margin: 0 }}>© The Plant Spot</p>
			</div>

			<div
				style={{
					flex: 1,
					display: "flex",
					justifyContent: "center",
					gap: "20px",
				}}
			>
				<a
					href="https://www.instagram.com/?hl=fr"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={logoInsta}
						alt="Logo Instagram"
						style={{ width: "40px", height: "40px" }}
					/>
				</a>
				<a
					href="https://www.linkedin.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={logolink}
						alt="Logo LinkedIn"
						style={{ width: "40px", height: "40px" }}
					/>
				</a>
				<a
					href="https://www.facebook.com/?locale=fr_FR"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={logoFace}
						alt="Logo Facebook"
						style={{ width: "40px", height: "40px" }}
					/>
				</a>
			</div>

			<div
				style={{
					flex: "0 1 auto",
					textAlign: "right",
				}}
			>
				<a
					href="/terms"
					style={{
						width: "100%",
						color: "#FFFFFF",
						textDecoration: "none",
						margin: "0 10px",
					}}
				>
					Terms & Conditions
				</a>
				<a
					href="/privacy"
					style={{
						color: "#FFFFFF",
						textDecoration: "none",
						margin: "0 10px",
					}}
				>
					Privacy
				</a>
			</div>
		</footer>
	);
};

export default Footer;
