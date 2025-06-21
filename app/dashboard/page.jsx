"use client";

import styles from "../page.module.css";
import Heeder from "../src/components/Heeder";
import Sitbar from "../src/components/Sitbar";
import Dashboard from "../src/components/Dashboard";

function dashboard() {
  return (
    <div>
      <div className={styles.layout}>
        <Sitbar />
        <div className={styles.mainContent}>
          <Heeder />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default dashboard;
