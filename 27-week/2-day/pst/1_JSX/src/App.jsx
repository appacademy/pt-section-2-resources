// import ComplexComponent from './ComplexComp';
// import { MyShowcase } from './Showcase';
// import LiterallyAnything, { MyShowcase } from './Showcase';
import Showcase from './Showcase';
import './App.css';

function App() {
    return (
        <div className="background">
            <h1>App Component</h1>
            <Showcase />
            {/* <LiterallyAnything />
            <MyShowcase /> */}
            {/* <ComplexComponent /> */}
        </div>
    );
}

export default App;
