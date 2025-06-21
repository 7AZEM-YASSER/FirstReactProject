"use client";

import styles from "../page.module.css";
import Heeder from "../src/components/Heeder";
import Sitbar from "../src/components/Sitbar";
import Setting from "../src/components/Setting";

function setting() {
  return (
    <div>
      <div className={styles.layout}>
        <Sitbar />
        <div className={styles.mainContent}>
          <Heeder />
          <Setting />
        </div>
      </div>
    </div>
  );
}

export default setting;
