import horoscopesObj from '../data/horoscopes';
import { useHoroscopeContext } from '../context/HoroscopeContext';

const Navbar = () => {
    console.log('\n\n***** Navbar Rendered *****\n\n');

    const { setCurrentSign } = useHoroscopeContext();
    const horoscopes = Object.keys(horoscopesObj);

    return (
        <nav>
            {horoscopes.map((sign) => (
                <span onClick={() => setCurrentSign(sign)} key={sign}>
                    {sign}
                </span>
            ))}
        </nav>
    );
};

export default Navbar;
