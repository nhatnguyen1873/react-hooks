import { useState } from "react";

export default function Text() {
  const [text, setText] = useState("");
  const handleChangeText = (e) => setText(e.target.value);
  const handleRemoveText = () => {
    if (text) setText("");
  };

  return (
    <>
      <h1>{text || "No text"}</h1>
      <input
        value={text}
        onChange={handleChangeText}
        placeholder="Enter text..."
      />
      <button onClick={handleRemoveText} style={{ marginLeft: "4px" }}>
        Remove text
      </button>
    </>
  );
}
