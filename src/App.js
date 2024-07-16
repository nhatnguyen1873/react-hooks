import "./App.css";
import Count from "./components/Count";
import TwoWayBinding from "./components/TwoWayBinding";
import CarList from "./components/CarList";

const cars = ["BMW", "Mercedes", "Audi", "Porsche", "Lexus"];

function App() {
  return (
    <div className="App">
      <Count />
      <TwoWayBinding />
      <CarList cars={cars} />
    </div>
  );
}

export default App;
