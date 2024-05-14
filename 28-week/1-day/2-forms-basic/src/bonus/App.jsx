import { useState, useEffect } from "react";
import Input from "./Input";
import Select from "./Select";
import Radio from "./Radio";
import useInvalidData from "./utils/validations";

const options = [
	{ value: "", text: "Select a type" },
	{ value: "home", text: "Home" },
	{ value: "work", text: "Work" },
	{ value: "mobile", text: "Mobile" },
];

const radios = [
	{ value: "instructor", text: "Instructor" },
	{ value: "student", text: "Student" },
];

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [phoneType, setPhoneType] = useState("");
	const [staff, setStaff] = useState("instructor");
	const [bio, setBio] = useState("");
	const [notifications, setNotifications] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);
	const { errors, invalidData } = useInvalidData();

	const handleSubmit = (e) => {
		e.preventDefault();

		const payload = {
			name,
			email,
			phone,
			phoneType: phone && phoneType,
			staff,
			bio,
			notifications,
			createdAt: Date.now(),
		};

		const hasErrors = invalidData(payload);

		if (hasErrors) {
			setIsSubmitted(true);
			return;
		}

		console.log(payload);
		setIsSubmitted(false);
	};

	useEffect(() => {
		if (isSubmitted) {
			invalidData({
				name,
				email,
				phone,
				phoneType,
				bio,
			});
		}
	}, [name, email, phone, phoneType, bio, isSubmitted]);

	return (
		<main>
			<form onSubmit={handleSubmit}>
				<h1>Form Practice</h1>
				<Input
					label={"Name"}
					value={name}
					setValue={setName}
					error={errors.name}
				/>
				<Input
					label={"Email"}
					value={email}
					setValue={setEmail}
					error={errors.email}
				/>
				<Input
					label={"Phone Number"}
					value={phone}
					setValue={setPhone}
					error={errors.error}
					placeholder={"111-867-5309"}
				/>
				<Select
					label={"Phone Type"}
					options={options}
					value={phoneType}
					setValue={setPhoneType}
					disabled={!phone}
					error={errors.phoneType}
				/>
				<Radio
					label={"Staff"}
					radios={radios}
					name={"staff"}
					state={staff}
					setState={setStaff}
				/>
				<Input
					label={"Bio"}
					value={bio}
					setValue={setBio}
					error={errors.bio}
					textarea={true}
				/>
				<Input
					label={"Sign up for email notifications"}
					value={notifications}
					setValue={setNotifications}
					type="checkbox"
				/>
				<button>Submit</button>
			</form>
		</main>
	);
}

export default App;
