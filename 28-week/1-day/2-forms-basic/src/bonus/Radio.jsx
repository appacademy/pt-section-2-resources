const Radio = ({ label, radios, name, state, setState }) => {
	const handleRadio = (e) => setState(e.target.value);

	return (
		<div className="input-ctn radio">
			<label>{label}</label>
			{radios.map(({ value, text }) => (
				<div key={value}>
					<input
						type="radio"
						name={name}
						onChange={handleRadio}
						value={value}
						checked={value === state}
					/>
					<span>{` ${text}`}</span>
				</div>
			))}
		</div>
	);
};

export default Radio;
