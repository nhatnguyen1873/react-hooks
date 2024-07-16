import "./App.css";
import { useState } from "react";
import StopWatch from "./components/StopWatch";
import WindowWidth from "./components/WindowWidth";
import TitleInput from "./components/TitleInput";
import Subscription from "./components/Subscription";
import PreviewAvatar from "./components/PreviewAvatar";
import ContentTabs from "./components/ContentTabs";
import GoToTopButton from "./components/GoToTopButton";

const tabs = [
  {
    id: 1,
    name: "Posts",
    path: "posts",
  },
  {
    id: 2,
    name: "Comments",
    path: "comments",
  },
  {
    id: 3,
    name: "Albums",
    path: "albums",
  },
  {
    id: 4,
    name: "Photos",
    path: "photos",
  },
  {
    id: 5,
    name: "Todos",
    path: "todos",
  },
  {
    id: 6,
    name: "Users",
    path: "users",
  },
];

const channels = [
  {
    id: 1,
    name: "ReactJS News",
  },
  {
    id: 2,
    name: "VueJS News",
  },
  {
    id: 3,
    name: "Angular News",
  },
];

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <button
        style={toggle ? { backgroundColor: "#6b8f71" } : {}}
        onClick={() => setToggle((prevToggle) => !prevToggle)}
      >
        Toggle
      </button>
      {toggle && (
        <>
          <StopWatch />
          <WindowWidth />
          <TitleInput />
          <Subscription channels={channels} />
          <PreviewAvatar />
          <ContentTabs tabs={tabs} />
          <GoToTopButton />
        </>
      )}
    </div>
  );
}

export default App;
