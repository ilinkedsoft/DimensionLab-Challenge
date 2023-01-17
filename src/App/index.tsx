import AttributeProvider, { useAttributeOptions } from '../context/AttributeContext';
import VisualUI from '../VisualUI';
import './App.css';

function App() {
  const attributeOptions = useAttributeOptions();
  return (
    <div className="App">
      <header className="App-header">
        App by Emil Tsankov
      </header>
      <AttributeProvider {...attributeOptions}>
        <VisualUI />
      </AttributeProvider>
    </div>
  );
}

export default App;
