import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

const Detail = () => {
    const {
        setCurrentSign,
        signObj: { name, element, traits, backgroundImg },
    } = useContext(HoroscopeContext);

    return (
        <div className="details">
            <img src={backgroundImg} alt={name} />
            <h2>{name}</h2>
            <h4>Element: {element}</h4>
            <h4>Traits: {traits}</h4>
            <button onClick={() => setCurrentSign('Libra')}>
                Change Sign to Libra
            </button>
        </div>
    );
};

export default Detail;
