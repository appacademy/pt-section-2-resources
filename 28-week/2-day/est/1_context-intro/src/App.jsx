import Navbar from './components/Navbar';
import SeparatorOne from './components/SeparatorOne';
import SideCard from './components/SideCard';

function App({ data }) {
    console.log('DATA FROM APP', data);
    return (
        <>
            <Navbar />
            <SideCard />
            <SeparatorOne data={data} />
        </>
    );
}

export default App;
