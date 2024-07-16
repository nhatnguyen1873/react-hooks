import { useState, useEffect } from "react";

export default function ContentTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.path);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${activeTab}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [activeTab]);

  return (
    <div style={{ marginTop: "16px" }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          style={tab.path === activeTab ? { backgroundColor: "#dfbd69" } : {}}
          onClick={() => setActiveTab(tab.path)}
        >
          {tab.name}
        </button>
      ))}
      {data.length > 0 && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title || item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
