import { useState } from "react";

export default function ComboRadio({ data }) {
  const [selected, setSelected] = useState(data[0].id);

  return (
    <>
      <h1>Which car do you want?</h1>
      {data.map((item) => (
        <div key={item.id}>
          <input
            type="radio"
            onChange={() => setSelected(item.id)}
            checked={item.id === selected}
          />{" "}
          {item.name}
        </div>
      ))}
      <button onClick={() => setSelected(data[0].id)}>Reset</button>
    </>
  );
}
