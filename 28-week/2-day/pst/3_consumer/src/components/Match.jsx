import { useState } from 'react';
import { useHoroscopeContext } from '../context/HoroscopeContext';

export default function Match() {
    const [match, setMatch] = useState(false);
    const { sign } = useHoroscopeContext();

    return (
        <>
            <button
                onClick={() => setMatch((bigBlueMuffins) => !bigBlueMuffins)}
            >
                Show Match
            </button>
           { match && <div>{sign.match}</div> }
        </>
    );
}
