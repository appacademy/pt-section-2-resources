import { createContext, useState } from 'react';
import hData from '../data/horoscopes';

export const HoroscopeContext = createContext();

export default function HoroscopeProvider(props) {
    const [currentSign, setCurrentSign] = useState('Libra');

    const signData = hData[currentSign];

    return (
        <HoroscopeContext.Provider
            value={{ signData, currentSign, setCurrentSign }}
        >
            {props.children}
        </HoroscopeContext.Provider>
    );
}
