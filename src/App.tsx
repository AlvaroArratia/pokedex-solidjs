import type { Component } from "solid-js";
import SideNav from "./components/SideNav";
import "./index.css";

const App: Component = () => {
  return (
    <>
      <div class="app-container">
        <SideNav />
        <div class="app-content">content</div>
      </div>
    </>
  );
};

export default App;
