import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

const SideCard = () => {
    const {
        signObj: { name },
    } = useContext(HoroscopeContext);
    return (
        <div className="side-card">
            <h1>React Context with Horoscopes</h1>
            <h2>{name}</h2>
        </div>
    );
};

export default SideCard;
