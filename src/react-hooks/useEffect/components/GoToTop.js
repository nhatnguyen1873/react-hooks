import { useState, useEffect } from "react";

export default function GoToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollListener = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScrollListener);
  }, []);

  if (!showButton) {
    return null;
  }

  return (
    <button
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
      }}
    >
      Go to top
    </button>
  );
}
