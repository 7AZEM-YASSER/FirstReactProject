"use client";

import styles from "../page.module.css";
import Heeder from "../src/components/Heeder";
import Sitbar from "../src/components/Sitbar";
import Warehouse from "../src/components/Warehouse";

function warehouse() {
  return (
    <div>
      <div className={styles.layout}>
        <Sitbar />
        <div className={styles.mainContent}>
          <Heeder />
          <Warehouse />
        </div>
      </div>
    </div>
  );
}

export default warehouse;