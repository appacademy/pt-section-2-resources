import { useState } from 'react';

export const NoEffect = () => {
    const [counter, setCounter] = useState(0);
    const [umph, setUmph] = useState('');

    const addEmphasis = () => {
        console.log(counter);
        if (counter && Math.abs(counter % 5 === 0)) {
            setUmph('!!!');
        } else setUmph('');
    };

    return (
        <div className="container">
            <div>
                <span>{umph}</span>
                <span>{counter}</span>
                <span>{umph}</span>
            </div>
            <div>
                <button
                    onClick={async () => {
                        setCounter(counter - 1);
                        addEmphasis();
                    }}
                >
                    -
                </button>
                <button
                    onClick={() => {
                        setCounter(counter + 1);
                        addEmphasis();
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
};
