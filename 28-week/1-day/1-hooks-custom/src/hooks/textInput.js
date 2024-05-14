import { useState } from "react";

export const useTextInput = ({ validations = [] }) => {
	const [value, setValue] = useState("");

	const validatorResults = validations.map((validator) => validator(value));
	const failedValidators = validatorResults.filter(
		(validationObj) => !validationObj.pass
	);

	const errors = failedValidators.map((validationObj) => validationObj.msg);

	const handleInput = (e) => setValue(e.target.value);

	return [value, handleInput, errors];
};
