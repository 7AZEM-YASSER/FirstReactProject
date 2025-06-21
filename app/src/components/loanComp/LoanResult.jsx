import styles from "../../../page.module.css";

function LoanResult({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div className={styles.loanResult}>
        <p className={styles.dataResult} style={errorMessage != null ? {color: "red"} : {color: "blue"}}>
          {errorMessage != null
            ? errorMessage
            : "The Form Has Been Submitted Successfully"}
        </p>
      </div>
    );
  } else {
    return <></>;
  }
}

export default LoanResult;
