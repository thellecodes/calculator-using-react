import './App.css';


// Components 
import Calcuator from "./components/calculator/calculator";
import Metric from "./components/metric/metric";

function App() {
  return (
    <div className="container">
      <Calcuator />
      <Metric />
    </div>
  );
}

export default App;
