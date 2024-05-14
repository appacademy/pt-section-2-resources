import { useState, useEffect } from "react";
import "./Form.css";

const Form = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [bio, setBio] = useState("");
	const [partying, setPartying] = useState("true");
	const [errors, setErrors] = useState({});

	const handleName = (e) => setName(e.target.value);
	const handleAge = (e) => setAge(e.target.value);
	const handleBio = (e) => setBio(e.target.value);
	const handleParty = (e) => setPartying(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const errors = {};

		if (!name || name === "Enter Name") {
			errors.name = "Name is required!";
		}

		if (bio.length < 20) {
			errors.bio = "Bio must be more than 20 characters.";
		}

		setErrors(errors);

		if (Object.values(errors).length) {
			return;
		}

		const payload = {
			name,
			age,
			bio,
			partying,
		};

		const res = await fetch("/api/people", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});
		const data = await res.json();
		console.log(data);
	};

	// useEffect(() => {
	// 	const errors = {};
	// 	if (!name) {
	// 		errors.name = "Name is required.";
	// 	}

	// 	setErrors(errors);
	// }, [name]);

	return (
		<form onSubmit={handleSubmit}>
			<h1>Welcome to the awesome form.</h1>
			<div className="input-ctn">
				<label>Name</label>
				<input
					value={name}
					onChange={handleName}
					placeholder="Enter Name"
				/>
				<div className="errors-ctn">{errors.name}</div>
			</div>
			<div className="input-ctn">
				<label>Age</label>
				<input type="number" value={age} onChange={handleAge} />
			</div>
			<div className="input-ctn">
				<label>Bio</label>
				<textarea value={bio} onChange={handleBio} />
				<div className="errors-ctn">{errors.bio}</div>
			</div>
			<div>
				<label>Are you partying on some code?</label>
				<input
					type="radio"
					name="party"
					value="true"
					onChange={handleParty}
					checked={partying === "true"}
				/>{" "}
				Yes
				<input
					type="radio"
					name="party"
					value="false"
					checked={partying === "false"}
					onChange={handleParty}
				/>{" "}
				No
			</div>
			<button>Submit</button>
		</form>
	);
};

export default Form;
