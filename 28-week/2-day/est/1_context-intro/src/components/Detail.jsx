import { useContext } from 'react';
import MyContextComponent, {
    HoroscopeContext,
} from '../context/HoroscopeContext';

const Detail = ({ data }) => {
    const myContextValues = useContext(HoroscopeContext);

    console.log(myContextValues);
    console.log(data, 'prop threaded data in Detail');

    return (
        <div className="details">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"
                alt=""
            />
            <h2>Current Sign Name</h2>
            <h4>Element: </h4>
            <h4>Traits: </h4>
            <MyContextComponent />
        </div>
    );
};

export default Detail;
