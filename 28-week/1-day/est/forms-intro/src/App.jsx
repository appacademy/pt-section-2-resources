import { useState, useEffect } from 'react';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (errors.length) {
            if (password.length >= 10) {
                setErrors([]);
            }
            if (email.includes('@')) {
                setErrors([]);
            }
        }
    }, [password, errors, email]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = [];

        if (!email.includes('@')) {
            newErrors.push('Please provide a valid email!');
        }

        if (password.length < 10) {
            newErrors.push('Please have at least 10 characters!');
        }

        setErrors(newErrors);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <form onSubmit={(e) => handleSubmit(e)}> */}
            <div id="errors">
                {errors.map((el, i) => (
                    <div key={i} style={{ color: 'red' }}>
                        {el}
                    </div>
                ))}{' '}
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="password">Password: </label>
                <input
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button disabled={errors.length}>Submit form</button>
        </form>
    );
}

export default App;
