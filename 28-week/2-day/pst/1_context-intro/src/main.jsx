import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HoroscopeContext } from './context/HoroscopeContext';

const data = { sign: 'Leo' };

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <NoscopeContext.Provider value={data}> */}
        <HoroscopeContext.Provider value={data}>
            <App data={data} />
        </HoroscopeContext.Provider>
        {/* </NoscopeContext.Provider> */}
    </React.StrictMode>
);
