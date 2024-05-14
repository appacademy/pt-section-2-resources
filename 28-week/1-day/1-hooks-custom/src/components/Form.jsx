import { textInputValidators } from "../utils/validations";
import { useTextInput } from "../hooks/textInput";

const Form = () => {
	const [name, handleName, nameErrors] = useTextInput({
		validations: textInputValidators,
	});

	return (
		<>
			<h1>Form Component</h1>
			<form>
				<ul>
					{nameErrors.map((err) => (
						<li key={err}>{err}</li>
					))}
				</ul>
				<label htmlFor="name">
					Name <input id="name" value={name} onChange={handleName} />
				</label>
			</form>
		</>
	);
};

export default Form;
