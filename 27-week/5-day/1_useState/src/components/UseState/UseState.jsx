import './UseState.css';
import { useState } from 'react';

const UseState = () => {
    // const [theme, setTheme] = useState('light');
    const [theme, setTheme] = useState('light');
    const [count, setCount] = useState(0);

    console.log(theme);

    return (
        <div className={`state ${theme}`}>
            <h1>UseState Component</h1>
            {/* <button onClick={() => setTheme('dark')}>Dark</button>
            <button onClick={() => setTheme('light')}>Light</button> */}
            {/* <button
                onClick={() => {
                    if (theme === 'light') setTheme('dark');
                    else setTheme('light');
                }}
            > */}
            <button
                onClick={() =>
                    setTheme((preTheme) =>
                        preTheme === 'light' ? 'dark' : 'light'
                    )
                }
            >
                Toggle Theme
            </button>
            <h2>{count}</h2>
            <button
                onClick={() => setCount((previousCount) => previousCount + 1)}
            >
                Increment
            </button>
            <button
                onClick={() => setCount((previousCount) => previousCount - 1)}
            >
                Decrement
            </button>
        </div>
    );
};

export default UseState;
