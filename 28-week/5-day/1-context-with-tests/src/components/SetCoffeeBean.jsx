import { useCoffee } from "../context/CoffeeContext";

const SetCoffeeBean = ({ coffeeBeans }) => {
	const { setCoffeeBeanId } = useCoffee();

	const handleSelect = (e) => setCoffeeBeanId(e.target.value);

	return (
		<div className="set-coffee-bean">
			<h2>Select a Coffee Bean</h2>
			<select name="coffee-bean" onChange={handleSelect}>
				{coffeeBeans.map((bean) => (
					<option key={bean.id} value={bean.id}>
						{bean.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default SetCoffeeBean;
