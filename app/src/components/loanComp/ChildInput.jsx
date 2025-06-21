import { useContext } from "react";
import { MyContext } from "../../context/LoanForm";

export default function ChildInput() {
  const inputContext = useContext(MyContext);

  return (
    <>
      <label>{inputContext.title}</label>
      <input
        value={inputContext.theValue}
        onChange={(e) => {
          inputContext.datafn(e.target.value);
        }}
        type={inputContext.theType}
        name={inputContext.theName}
      />
    </>
  );
}
