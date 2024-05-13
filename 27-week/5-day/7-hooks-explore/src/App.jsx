import ProductView from './components/ProductView';

// Eventually this should be data loaded from a service, for now just fake it.
import products from './mockdata/products.json';

function App() {
  return (
    <div className="App">
      <ProductView products={products} />
    </div>
  );
}

export default App;

