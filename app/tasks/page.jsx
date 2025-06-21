"use client";

import styles from "../page.module.css";
import Heeder from "../src/components/Heeder";
import Sitbar from "../src/components/Sitbar";
import { createTheme, ThemeProvider, styled } from "@mui/material";
import { orange, lightBlue, red } from "@mui/material/colors";
import { TaskContextProvider } from "../src/context/TaskContext"
import Tasks from "../src/components/Tasks";
// import DeletePopUp from "../src/components/taskComp/DeletePopUp";
// import UpdatePopUp from "../src/components/taskComp/UpdatePopUp";

const them = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: lightBlue[600]
    },
    secondary: {
      main: red[600]
    }
  },
  typography: {
    fontFamily: "alex"
  }
})

function theTasks() {

  return (
    <ThemeProvider theme={them}>
      <div>
        <div className={styles.layout}>
            <Sitbar />
          <div className={styles.mainContent}>
            <Heeder />
            <TaskContextProvider>
              <Tasks />
              {/* <UpdatePopUp/> */}
              {/* <DeletePopUp/> */}
            </TaskContextProvider>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default theTasks;