import { useState } from "react";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [phoneType, setPhoneType] = useState("");
	const [staff, setStaff] = useState("instructor");
	const [bio, setBio] = useState("");
	const [notifications, setNotifications] = useState("");
	const [errors, setErrors] = useState({});

	const nameInput = (e) => setName(e.target.value);
	const phoneInput = (e) => setPhone(e.target.value);
	const emailInput = (e) => setEmail(e.target.value);
	const phoneTypeInput = (e) => setPhoneType(e.target.value);
	const staffInput = (e) => setStaff(e.target.value);
	const bioInput = (e) => setBio(e.target.value);
	const notificationsInput = (e) => setNotifications(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();

		const errors = {};

		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const phoneRegex = /^\+?[1-9]\d{1,14}$/;

		if (!name) {
			errors.name = "Name is required.";
		}

		if (!email) {
			errors.email = "Email is required.";
		} else if (!emailRegex.test(email)) {
			errors.email = "Email must be a valid email.";
		}

		if (phone && !phoneRegex.test(phone)) {
			errors.phone = "Phone number must be a valid phone number.";
		}

		if (phone && !phoneType) {
			errors.phoneType =
				"Phone type must be selected if a phone number is presented.";
		}
		if (bio.length > 280) {
			errors.bio = "Bio should have a character limit of 280 characters.";
		}

		if (Object.values(errors).length) {
			setErrors(errors);
			return;
		}

		const payload = {
			name,
			email,
			phone,
			phoneType,
			staff,
			bio,
			notifications,
		};

		console.log(payload);
	};

	return (
		<main>
			<form onSubmit={handleSubmit}>
				<h1>Form Practice</h1>
				<div className="input-ctn">
					<label>Name</label>
					<input
						style={errors.name && { outline: "red" }}
						value={name}
						onChange={nameInput}
					/>
					<div className="errors-ctn">{errors.name}</div>
				</div>
				<div className="input-ctn">
					<label>Email</label>
					<input value={email} onChange={emailInput} />
					<div className="errors-ctn">{errors.email}</div>
				</div>
				<div className="input-ctn">
					<label>Phone Number</label>
					<input value={phone} onChange={phoneInput} />
					<div className="errors-ctn">{errors.phone}</div>
				</div>
				<div className="input-ctn">
					<label>Phone Type</label>
					<select onChange={phoneTypeInput} value={phoneType}>
						<option value="">Select a type</option>
						<option value="home">Home</option>
						<option value="work">Work</option>
						<option value="mobile">Mobile</option>
					</select>
					<div className="errors-ctn">{errors.phoneType}</div>
				</div>
				<div className="input-ctn radio">
					<label>Staff</label>
					<div>
						<input
							type="radio"
							name="staff"
							onChange={staffInput}
							value="instructor"
							checked={staff === "instructor"}
						/>{" "}
						Instructor
					</div>
					<div>
						<input
							type="radio"
							name="staff"
							onChange={staffInput}
							value="student"
							checked={staff === "student"}
						/>{" "}
						Student
					</div>
				</div>
				<div className="input-ctn">
					<label>Bio</label>
					<textarea value={bio} onChange={bioInput} />
					<div className="errors-ctn">{errors.bio}</div>
				</div>
				<div className="input-ctn checkbox">
					<label>Sign up for email notifications</label>
					<input
						type="checkbox"
						value={notifications}
						onChange={notificationsInput}
					/>
				</div>
				<button>Submit</button>
			</form>
		</main>
	);
}

export default App;
