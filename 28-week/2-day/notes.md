# React Context

## Creating the Context

```jsx
import { createContext } from 'react';

export const PupContext = createContext();
```

## "Providing" the Context

```jsx
export function PupProvider(props) {
  const [puppyType, setPuppyType] = useState("Some initial Value");

  return (
    <PupContext.Provider value={{ puppyType, setPuppyType }}>
      {props.children}
    </PupContext.Provider>
  )
}

// main.jsx
<PupProvider>
  <App />
</PupProvider>
```

## Consuming the Context

```jsx
import { useContext } from 'react';
import { PupContext } from '../../context/PupContext';


const PupImage = () => {
  const { puppyType } = useContext(PupContext);

  return (
    <img src={puppyType} alt="pup" />
  );
};

export default PupImage;

```