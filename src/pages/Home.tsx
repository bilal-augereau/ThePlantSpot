import React from "react";
import "./HomeBody2.css";
import photo1 from "../img/photo/freepik__upload__4163.jpeg";
import photo2 from "../img/photo/freepik__upload__27007.jpeg";

function Home() {
	return (
		<div className="app">
			<div className="content">
				<div className="text">
					<h3 className="titre2"> Exceptional Plant Varieties</h3>
					<p className="paragraphe2">
						We are here to guide you in choosing the indoor plants that suit
						your needs. Whether it's a Kentia palm, a ficus, or succulents,
						discover easy-to-care-for species that are perfect for air
						purification, thrive in low light, or are safe for your pets. Our
						mission is to help you transform your space with plants that bring
						life, style, and serenity, all while matching your lifestyle. 🌿
					</p>
				</div>
				<img className="Photo1" src={photo2} alt="Green oasis" />
			</div>

			<div className="content reverse">
				<img className="Photo2" src={photo1} alt="Indoor plants" />
				<div className="text">
					<h3 className="titre1">Easy Care</h3>
					<p className="paragraphe1">
						Caring for your indoor plants becomes a true pleasure with The Plant
						Spot. We guide you step by step to understand and meet the specific
						needs of your plants, helping them thrive to their fullest
						potential. From choosing the right spot and watering schedule to
						ensuring proper soil, light, and care, we provide simple tips to
						create a lush, vibrant indoor space you’ll love.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
