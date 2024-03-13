import './App.css';
import Generated from './Generated';
import Selected from './Selected';
import Weighs from './Weighs';

function App() {
  return (
    <div className="App">
      <p>Vakioveikkaus rivien generointi</p>
      <Weighs />
      <Generated />
      <Selected />
    </div>
  );
}

export default App;
