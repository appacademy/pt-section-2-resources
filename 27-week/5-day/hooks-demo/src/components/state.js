import { useState } from 'react';

export const State = () => {
    const [counter, setCounter] = useState(0);

    console.log('Line 4 counter', counter);

    return (
        <div className="container">
            <span>{counter}</span>
            <div>
                <button
                    onClick={async () => {
                        setCounter(counter - 1);
                        console.log(counter);
                    }}
                >
                    -
                </button>
                <button
                    onClick={() => {
                        // setCounter(counter + 1);
                        setCounter((thisIsTheLastVersion) => {
                            console.log(
                                'thisIsTheLastVersion',
                                thisIsTheLastVersion
                            );
                            return counter + 1;
                        });
                        console.log('line 30', counter);
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
};
