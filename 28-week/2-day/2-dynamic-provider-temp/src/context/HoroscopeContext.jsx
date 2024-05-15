import { createContext, useState } from "react";
import horoscopes from "../data/horoscopes";

export const HoroscopeContext = createContext();

const HoroscopeProvider = ({ children }) => {
	const [currentSign, setCurrentSign] = useState("Aries");
	const sign = horoscopes[currentSign];

	return (
		<HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
			{children}
		</HoroscopeContext.Provider>
	);
};

export default HoroscopeProvider;
