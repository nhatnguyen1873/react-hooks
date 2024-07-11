import Text from "./components/Text";
import ComboRadio from "./components/ComboRadio";
import ComboCheckbox from "./components/ComboCheckbox";

const cars = [
  { id: 1, name: "BMW" },
  { id: 2, name: "Mercedes" },
  { id: 3, name: "Audi" },
  { id: 4, name: "Porsche" },
  { id: 5, name: "Lexus" },
];

export default function TwoWayBinding() {
  return (
    <>
      <Text />
      <ComboRadio data={cars} />
      <ComboCheckbox data={cars} />
    </>
  );
}
