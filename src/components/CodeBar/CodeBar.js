import { useState } from "react";
import CssEditor from "../Editors/CssEditor";
import HtmlEditor from "../Editors/HtmlEditor";
import JsEditor from "../Editors/JsEditor";
import styles from "./CodeBar.module.css";

const CodeBar = () => {
  const [activeTab, setActiveTab] = useState("HTML");

  const buttons = ["HTML", "CSS", "JS"];

  return (
    <div className={styles.codebar}>
      <nav className={styles.nav}>
        {buttons.map((b) => (
          <button
            className={`${styles.item} ${activeTab === b ? styles.active : ""}`}
            onClick={() => setActiveTab(b)}
          >
            {b}
          </button>
        ))}
      </nav>
      <div className={styles.editor}>
        {activeTab === 'HTML' ? <HtmlEditor /> : null}
        {activeTab === 'CSS' ? <CssEditor /> : null}
        {activeTab === 'JS' ? <JsEditor /> : null}
      </div>
    </div>
  );
};

export { CodeBar };
