import { useState } from "react";

export default function CarList({ cars }) {
  const [carList, setCarList] = useState([]);

  const handleGetRandomCar = () => {
    const index = Math.floor(Math.random() * cars.length);

    setCarList((prevCarList) => [...prevCarList, cars[index]]);
  };
  const handleRemoveCar = (index) => {
    setCarList((prevCarList) => prevCarList.filter((_, i) => i !== index));
  };
  const handleRemoveAllCar = () => {
    if (carList.length > 0) setCarList([]);
  };

  return (
    <>
      {carList.length > 0 ? (
        <>
          <h1>Your cars:</h1>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {carList.map((car, index) => (
              <li key={index}>
                {car}{" "}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRemoveCar(index)}
                >
                  X
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h1>No car</h1>
      )}
      <button onClick={handleGetRandomCar}>Get random car</button>
      <button onClick={handleRemoveAllCar} style={{ marginLeft: "4px" }}>
        Remove all cars
      </button>
    </>
  );
}
