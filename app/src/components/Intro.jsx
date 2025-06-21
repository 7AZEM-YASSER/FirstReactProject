import styles from "../../page.module.css";
import { useState } from "react";

function Intro() {
  let [name, setName] = useState("Ahmed");

  function buttnClicked() {
    if (name == "Ahmed") {
      setName("Hazem");
    } else if (name == "Hazem") {
      setName("Ahmed");
    }
  }

  return (
    <div className={styles.intro}>
      <div className={styles.container}>
        <p>{name}</p>
        <button className={styles.myButton} onClick={buttnClicked}>
          Change
        </button>
      </div>
    </div>
  );
}

export default Intro;
