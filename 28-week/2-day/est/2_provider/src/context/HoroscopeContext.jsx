import { useState } from 'react';
import { createContext } from 'react';
import horoscopesObj from '../data/horoscopes';

export const HoroscopeContext = createContext();

export default function HoroscopeProvider(props) {
    const [currentSign, setCurrentSign] = useState('Leo');

    const signObj = horoscopesObj[currentSign];

    return (
        <HoroscopeContext.Provider value={{ signObj, setCurrentSign }}>
            {props.children}
        </HoroscopeContext.Provider>
    );
}
