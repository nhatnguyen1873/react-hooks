import Count from "./components/Count";
import TwoWayBinding from "./components/TwoWayBinding";
import CarList from "./components/CarList";

const cars = ["BMW", "Mercedes", "Audi", "Porsche", "Lexus"];

export default function UseState() {
  return (
    <>
      <Count />
      <TwoWayBinding />
      <CarList cars={cars} />
    </>
  );
}
