import { errorStyle } from "./utils/styles";

const Select = ({ label, options, value, setValue, disabled, error }) => {
	const handleSelect = (e) => setValue(e.target.value);

	return (
		<div className="input-ctn">
			<label>{label}</label>
			<select
				value={value}
				onChange={handleSelect}
				disabled={disabled}
				style={errorStyle(error)}
			>
				{options.map(({ value, text }) => (
					<option key={value} value={value}>
						{text}
					</option>
				))}
			</select>
			<div className="errors-ctn">{error}</div>
		</div>
	);
};

export default Select;
