import { useNavigate } from 'react-router-dom';

const Unmounted = () => {
  return (
    <div className='unmounted'>
      <h1>Welcome</h1>
      <button onClick={() => navigate('/mount')}>Login</button>
    </div>
  );
};

export default Unmounted;
