import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const COLORS = ["red", "orange", "yellow", "green", "blue", "purple"];

function FruitForm({ fruits }) {
	const [name, setName] = useState("");
	const [sweetness, setSweetness] = useState(1);
	const [seeds, setSeeds] = useState("yes");
	const [color, setColor] = useState(COLORS[1]);
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const handleName = (e) => setName(e.target.value);
	const handleSweetness = (e) => setSweetness(e.target.value);
	const handleSeeds = (e) => setSeeds(e.target.value);
	const handleColor = (e) => setColor(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();

		const payload = {
			name,
			sweetness,
			seeds,
			color,
		};

		console.log(payload);
		navigate("/");
	};

	useEffect(() => {
		const errors = {};

		const fruitExists = fruits.find((fruit) => fruit.name === name);

		if (name.length < 3) {
			errors.name = "Name must be 3 or more characters";
		} else if (name.length > 20) {
			errors.name = "Name must be 20 characters or less";
		} else if (fruitExists) {
			errors.name = "Name already exists";
		}

		if (sweetness < 1 || sweetness > 10) {
			errors.sweetness = "Sweetness must be between 1 and 10";
		}

		setErrors(errors);
	}, [name, sweetness]);

	return (
		<form className="fruit-form" onSubmit={handleSubmit}>
			<h2>Enter a Fruit</h2>
			<label>
				Name
				<input
					value={name}
					onChange={handleName}
					type="text"
					name="name"
				/>
			</label>
			<p className="errors">{errors.name}</p>
			<label>
				Select a Color
				<select value={color} onChange={handleColor}>
					{COLORS.map((color) => (
						<option key={color} value={color}>
							{color}
						</option>
					))}
				</select>
			</label>
			<label>
				Sweetness
				<input
					value={sweetness}
					onChange={handleSweetness}
					type="number"
					name="sweetness"
				/>
			</label>
			<p className="errors">{errors.sweetness}</p>
			<label>
				<input
					onChange={handleSeeds}
					checked={seeds === "no"}
					type="radio"
					value="no"
					name="seeds"
				/>
				No Seeds
			</label>
			<label>
				<input
					onChange={handleSeeds}
					checked={seeds === "yes"}
					type="radio"
					value="yes"
					name="seeds"
				/>
				Seeds
			</label>
			<button disabled={Object.values(errors).length} type="submit">
				Submit Fruit
			</button>
		</form>
	);
}

export default FruitForm;
