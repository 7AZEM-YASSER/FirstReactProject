import styles from "../../../page.module.css";
import ChildInput from "./ChildInput";

export default function InputType() {
  return (
    <>
      <div className={styles.child}>
        <ChildInput />
      </div>
    </>
  );
}
