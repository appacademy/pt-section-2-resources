import { errorStyle } from "./utils/styles";

const Input = ({
	label,
	value,
	setValue,
	error,
	placeholder,
	textarea,
	type = "text",
}) => {
	const inputHandle = (e) => setValue(e.target.value);
	const classFormat = () => {
		let base = "input-ctn";
		if (type === "checkbox") base += " checkbox";
		return base;
	};

	return (
		<div className={classFormat()}>
			<label>{label}</label>
			{textarea ? (
				<textarea
					value={value}
					onChange={inputHandle}
					style={errorStyle(error)}
					placeholder={placeholder}
				/>
			) : (
				<input
					value={value}
					onChange={inputHandle}
					style={errorStyle(error)}
					placeholder={placeholder}
					type={type}
				/>
			)}

			<div className="errors-ctn">{error}</div>
		</div>
	);
};

export default Input;
