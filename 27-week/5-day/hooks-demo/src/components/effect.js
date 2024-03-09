import { useState, useEffect } from 'react';

// const addEmphasis = () => {
//     console.log(counter, 'from onClick');
//     if (counter && Math.abs(counter % 5 === 0)) {
//         setUmph('!!!');
//     } else setUmph('');
// };

// useEffect(addEmphasis,[counter]);

export const Effect = () => {
    console.log("\n______________I'm RERENDERING!!!!_________________\n");

    const [counter, setCounter] = useState(0);
    const [umph, setUmph] = useState('');

    useEffect(() => {
        console.log('--------------useEffect running!--------------');

        console.log('Current counter: ', counter);
        console.log('Current umph: ', umph);

        if (counter && Math.abs(counter % 5 === 0)) {
            setUmph('!!!');
        } else setUmph('');
        // we don't need to watch for "umph", but it's not hurting us here
    }, [counter, umph]);

    console.log('*****\n Newest JSX is live! (return has run!) \n*****');

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
                        console.log(
                            '--------------Button Clicked!--------------'
                        );
                        setCounter(counter - 1);
                    }}
                >
                    -
                </button>
                <button
                    onClick={() => {
                        console.log(
                            '--------------Button Clicked!--------------'
                        );
                        setCounter(counter + 1);
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
};
