import React, { useState } from "react";
import { Tab1 } from './Tab1';
import { Tab2 } from './Tab2';

export function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

    return (
      <div className="Tabs">
        <ul className="nav">
          <li
            className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}
          >
            Tab 1
          </li>
          <li
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
          >
            Tab 2
          </li>
        </ul>
        <div className="outlet">
          {activeTab === "tab1" ? <Tab1 /> : <Tab2 />}
        </div>
      </div>
    )
}