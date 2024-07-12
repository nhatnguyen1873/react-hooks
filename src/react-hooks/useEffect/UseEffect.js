import TitleText from "./components/TitleText";
import ContentTabs from "./components/ContentTabs";
import GoToTop from "./components/GoToTop";
import { useState } from "react";

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

export default function UseEffect() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button
        style={toggle ? { backgroundColor: "#6b8f71" } : {}}
        onClick={() => setToggle((prevToggle) => !prevToggle)}
      >
        Toggle
      </button>
      {toggle && (
        <>
          <TitleText />
          <ContentTabs tabs={tabs} />
          <GoToTop />
        </>
      )}
    </>
  );
}
