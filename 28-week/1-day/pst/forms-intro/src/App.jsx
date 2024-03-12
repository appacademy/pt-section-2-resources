import { useState, useEffect } from 'react';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = [];

        if (!email.includes('@')) {
            newErrors.push('Please submit a valid email!');
        }

        // if (password.length < 10) {
        //     newErrors.push('Password must be at least 10 characters long!');
        // }

        setErrors(newErrors);
    };

    useEffect(() => {
        if (errors.length) {
            if (email.includes('@')) {
                setErrors([]);
            }
        }
    }, [errors, email]);

    return (
        <form onSubmit={handleSubmit}>
            {/* <form onSubmit={(e) => handleSubmit(e)}> */}
            <div>
                {errors.map((el, i) => (
                    <div style={{ color: 'red' }} key={i}>
                        {el}
                    </div>
                ))}
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
            <div>
                <button disabled={errors.length}>Submit Form!</button>
            </div>
        </form>
    );
}

export default App;
