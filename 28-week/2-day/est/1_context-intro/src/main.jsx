import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HoroscopeContext } from './context/HoroscopeContext';

const myData = { sign: 'Leo', clan: 'FaZe' };

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HoroscopeContext.Provider value={myData}>
            {/* <NoscopeContext.Provider value={{ clan: 'FaZe' }}> */}
            <App data={myData}/>
            {/* </NoscopeContext.Provider> */}
        </HoroscopeContext.Provider>
    </React.StrictMode>
);
