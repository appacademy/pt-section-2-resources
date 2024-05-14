import { useState } from "react";

const validateName = (name, errors) => {
	if (!name) errors.name = "Name is required.";
};

const validateEmail = (email, errors) => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	if (!email) {
		errors.email = "Email is required.";
	} else if (!emailRegex.test(email)) {
		errors.email = "Email must be a valid email.";
	}
};

const validatePhone = (phone, phoneType, errors) => {
	const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

	if (phone && !phoneRegex.test(phone)) {
		errors.phone = "Phone number must be a valid phone number.";
	}
	if (phone && !phoneType) {
		errors.phoneType =
			"Phone type must be selected if a phone number is presented.";
	}
};

const validateBio = (bio, errors) => {
	if (bio.length > 280) {
		errors.bio = "Bio should have a character limit of 280 characters.";
	}
};

const invalidData = (setErrors) => (payload) => {
	const validationErrors = {};

	validateName(payload.name, validationErrors);
	validateEmail(payload.email, validationErrors);
	validatePhone(payload.phone, payload.phoneType, validationErrors);
	validateBio(payload.bio, validationErrors);

	if (Object.values(validationErrors).length) {
		setErrors(validationErrors);
		return true;
	}

	return false;
};

const useInvalidData = () => {
	const [errors, setErrors] = useState({});

	return { errors, invalidData: invalidData(setErrors) };
};

export default useInvalidData;
