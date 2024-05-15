import { createContext, useState, useContext } from "react";
import horoscopesObj from "../data/horoscopes";

export const HoroscopeContext = createContext();

export const useHoroscope = () => useContext(HoroscopeContext);

const HoroscopeProvider = (props) => {
	const [currentSign, setCurrentSign] = useState("Leo");
	const sign = horoscopesObj[currentSign];

	return (
		<HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
			{props.children}
		</HoroscopeContext.Provider>
	);
};

export default HoroscopeProvider;
