import { Navigate, useNavigate } from 'react-router-dom';

function Stocks() {
    const loggedIn = true;
    const navMe = useNavigate();

    if (!loggedIn) return <Navigate to="/not-logged-in" replace={true} />;

    const handleClick = () => {
        alert('Calling da police');
        navMe(`/`);
    };

    return (
        <div className="comp orange">
            <h1>Stocks Component</h1>
            <button onClick={handleClick}>Home</button>
        </div>
    );
}

export default Stocks;
