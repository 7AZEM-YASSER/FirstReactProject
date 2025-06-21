"use client";

import styles from "../page.module.css";
import Heeder from "../src/components/Heeder";
import Sitbar from "../src/components/Sitbar";
import LoanResult from "../src/components/loanComp/LoanResult";
import InputType from "../src/components/loanComp/InputType";
import Select from "react-select";
import { useState } from "react";
import { MyContext } from "../src/context/LoanForm";

const colorOptions = [
  { value: "less", label: "less than 500$" },
  { value: "equal", label: "between 500$ and 2000$" },
  { value: "above", label: "above 2000$" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#e0f2fe", // لون خلفية حقل الإدخال (التحكم) - أزرق فاتح
    borderColor: state.isFocused ? "#3b82f6" : "#00ffff", // لون الحدود عند التركيز أو عدمه
    boxShadow: state.isFocused ? "0 0 0 1px #3b82f6" : "none", // ظل مربع عند التركيز
    borderRadius: "0.5rem", // حواف مستديرة
    minHeight: "38px",
    cursor: "pointer",
    "&:hover": {
      borderColor: "#3b82f6", // لون الحدود عند التحليق
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#93c5fd20"
      : state.isFocused
      ? "#e0f2fe60"
      : "transparent", // لون الخلفية للخيار المحدد أو عند التركيز
    color: "white", // لون النص للخيار المحدد أو العادي
    padding: "10px 12px",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#1e40af", // لون النص للقيمة المختارة داخل حقل الإدخال
    fontWeight: "bold",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#6b7280", // لون النص للمؤشر (placeholder)
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: "#bfdbfe", // لون الفاصل بين المؤشرات (السهم وزر المسح)
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused ? "#3b82f6" : "#60a5fa", // لون سهم القائمة المنسدلة
    "&:hover": {
      color: "#3b82f6",
    },
  }),
  clearIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused ? "#ef4444" : "#ef4444", // لون زر المسح
    "&:hover": {
      color: "#dc2626",
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "0.5rem",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // ظل القائمة المنسدلة
    marginTop: "0.5rem",
    padding: "0.25rem 0", // مسافة داخلية (padding) للقائمة
    background: "linear-gradient(to bottom, #390057, #00573f, #002237)",
  }),
};

function loan() {
  const [errorMessage, setErrorMessage] = useState(null);

  const [hideState, setHideState] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    employee: false,
    salary: "",
  });

  function changeState() {
    setHideState(false);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const { name } = formData;
    const { age } = formData;
    const { phone } = formData;
    setErrorMessage(null);
    if (name.length > 12) {
      setErrorMessage("the name mustn't be more than 12 length");
    } else if (phone.length != 11) {
      setErrorMessage("choese a real egyption number");
    } else if (age < 18) {
      setErrorMessage("the age is not allowed");
    } else if (age > 100) {
      setErrorMessage("it's a fucking big age");
    }
    setHideState(true);
  }

  function handleNameChange(value) {
    setFormData({ ...formData, name: value });
  }

  function handlePhoneChange(value) {
    setFormData({ ...formData, phone: value });
  }

  function handleAgeChange(value) {
    setFormData({ ...formData, age: value });
  }

  const statebtn =
    formData.name == "" || formData.phone == "" || formData.age == "";

  return (
    <div>
      <div className={styles.layout}>
        <div className={styles.mainContent}>
          <Sitbar />
        </div>
        <div className={styles.mainContent}>
          <Heeder />
          <div className={styles.loan}>
            <div className={styles.loanForm}>
              <p className={styles.title}>Take A loan</p>
              <form>
                <MyContext.Provider
                  value={{
                    theValue: formData.name,
                    datafn: handleNameChange,
                    title: "name",
                    theType: "text",
                    TheName: "userName",
                  }}
                >
                  <InputType />
                </MyContext.Provider>
                <MyContext.Provider
                  value={{
                    theValue: formData.phone,
                    datafn: handlePhoneChange,
                    title: "phone number",
                    theType: "number",
                    TheName: "phone",
                  }}
                    >
                  <InputType/>
                </MyContext.Provider>
                <MyContext.Provider
                  value={{
                    theValue: formData.age,
                    datafn: handleAgeChange,
                    title: "age",
                    theType: "number",
                    TheName: "age",
                  }}
                  >
                  <InputType/>
                </MyContext.Provider>
                <div className={styles.child}>
                  <label>are you an employee?</label>
                  <input
                    type="checkbox"
                    checked={formData.employee}
                    onChange={(e) => {
                      setFormData({ ...formData, employee: e.target.checked });
                    }}
                  />
                </div>
                <div className={styles.child}>
                  <label htmlFor="selected">salary</label>
                  <Select
                    id="selected"
                    defaultValue={formData.salary}
                    onChange={(option) => {
                      setFormData({ ...formData, salary: option });
                    }}
                    options={colorOptions}
                    styles={customStyles}
                    isClearable
                    isSearchable
                    placeholder="Choese The Salary"
                    noOptionsMessage={() => "No Options"}
                    style={{ width: "60%" }}
                  />
                </div>
                <button
                  style={
                    statebtn == true
                      ? { backgroundColor: "#7b008b50", cursor: "not-allowed" }
                      : { backgroundColor: "#7b008b" }
                  }
                  onClick={handleFormSubmit}
                  disabled={statebtn}
                >
                  submit
                </button>
              </form>
            </div>
            {hideState && (
              <div onClick={changeState}>
                <LoanResult errorMessage={errorMessage} isVisible={hideState} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default loan;
