import { useState } from "react";

export default function ComboCheckbox({ data }) {
  const [checked, setChecked] = useState([]);
  const handleCheck = (id) => {
    setChecked((prevChecked) => {
      const isChecked = prevChecked.includes(id);

      if (isChecked) {
        return prevChecked.filter((item) => item !== id);
      } else {
        return [...prevChecked, id];
      }
    });
  };
  const handleReset = () => {
    if (checked.length > 0) setChecked([]);
  };

  return (
    <>
      <h1>You can pick more than one car</h1>
      {data.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={checked.includes(item.id)}
          />{" "}
          {item.name}
        </div>
      ))}
      <button onClick={handleReset}>Submit</button>
    </>
  );
}
