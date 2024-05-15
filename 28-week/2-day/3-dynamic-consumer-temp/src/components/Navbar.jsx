import horoscopesObj from "../data/horoscopes";
import { useHoroscope } from "../context/HoroscopeContext";

const Navbar = () => {
	const { setCurrentSign } = useHoroscope();
	const horoscopes = Object.keys(horoscopesObj);

	const handleClick = (e) => setCurrentSign(e.target.textContent);

	return (
		<nav>
			{horoscopes.map((sign) => (
				<span onClick={handleClick} key={sign}>
					{sign}
				</span>
			))}
		</nav>
	);
};

export default Navbar;
