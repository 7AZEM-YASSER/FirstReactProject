import { createContext } from "react";

export let MyContext = createContext({
  labelTitle: "",
  handleChange: null,
  inputValue: null,
});
