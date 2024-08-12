import { useState } from 'react';
import StyledButton from './App.styles';
import Svg from './assets/react.svg?react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Svg/>
      <div className="card">
        <StyledButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </StyledButton>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;