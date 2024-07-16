import { useState, useEffect } from "react";

const DOCUMENT_TITLE = "React App";

export default function TitleInput() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = DOCUMENT_TITLE;
    }
  }, [title]);

  return (
    <div>
      <label>Page title: </label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
}
