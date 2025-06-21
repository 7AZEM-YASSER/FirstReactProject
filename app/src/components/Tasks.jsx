"use client";

import { useEffect, useState, useContext } from "react";
import {
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import styles from "../../page.module.css";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import { TheContext } from "../context/TaskContext";
// Components
import Todo from "./taskComp/Todo";
// import { color } from "framer-motion";

function Tasks() {
  const [todoArr, setTodoArr] = useContext(TheContext);
  const [inputData, setInputData] = useState("");
  const [inputDescData, setInputDescData] = useState("");
  const [tasksList, setTasksList] = useState(null);
  const [notFound, setNotFound] = useState("");
  const [alignment, setAlignment] = useState("all");

  function addNewTask() {
    if (inputData.trim() === "") {
      setNotFound("No Something Written");
      return;
    }

    setNotFound("");

    let myObj = {
      id: Date.now(),
      title: inputData,
      desc: inputDescData,
      isCompleted: false,
    };

    setTodoArr([...todoArr, myObj]);
    setInputData("");
    setInputDescData("");
  }

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    if (!Array.isArray(todoArr)) {
      console.error("todoArr received is not an array:", todoArr);
      setTasksList([]);
      return;
    }

    let filtered = [];

    if (alignment == "all") {
      filtered = todoArr;
    } else if (alignment == "done") {
      filtered = todoArr.filter((el) => el.isCompleted == true);
    } else if (alignment == "notDone") {
      filtered = todoArr.filter((el) => el.isCompleted != true);
    }

    const renderedTasks = filtered.map((el) => {
      return <Todo key={el.id} data={el} />;
    });

    setTasksList(renderedTasks);
  }, [todoArr, alignment]);

  // useEffect(() => {
  //   if (Array.isArray(todoArr)) {
  //     localStorage.setItem("myTasks", JSON.stringify(todoArr));
  //   } else {
  //     console.error("todoArr received is not an array:", todoArr);
  //   }
  // }, [todoArr]);

  return (
    <div className={styles.intro}>
      <div className={styles.container}>
        <Container maxWidth="sm">
          <Card
            sx={{
              bgcolor: "#ff7043",
              textAlign: "center",
              borderRadius: "10px !important",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{ textTransform: "capitalize", p: "15px", color: "#fff" }}
              >
                my tasks
              </Typography>
              <Divider variant="middle" />
              {todoArr == "" ? null : (
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                  sx={{
                    marginTop: "20px",
                    borderTop: "1px solid black",
                    borderBottom: "1px solid black",
                  }}
                >
                  <ToggleButton value="all">
                    <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                      all
                    </Typography>
                  </ToggleButton>
                  <ToggleButton value="done">
                    <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                      done
                    </Typography>
                  </ToggleButton>
                  <ToggleButton value="notDone">
                    <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                      not done
                    </Typography>
                  </ToggleButton>
                </ToggleButtonGroup>
              )}
            </CardContent>
            <CardContent>
              {tasksList == "" ? <p>Nothing Here</p> : tasksList}
            </CardContent>
            <Divider />
            <CardActions>
              <Grid container gap={.5} sx={{ width: "100%" }}>
                <Grid
                  size={4}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <TextField
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                  <Typography
                    sx={{ color: "red", fontWeight: "bold", fontSize: "13px" }}
                  >
                    {notFound}
                  </Typography>
                </Grid>
                <Grid
                  size={7.9}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <TextField
                    value={inputDescData}
                    onChange={(e) => setInputDescData(e.target.value)}
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    sx={{ width: "100%" }}
                  />
                  <Typography
                    sx={{ color: "red", fontWeight: "bold", fontSize: "13px" }}
                  >
                    {notFound}
                  </Typography>
                </Grid>
                <Grid
                  size={12}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Button
                    sx={{ width: "20%", height: "70%", p: "15px" }}
                    variant="contained"
                    onClick={addNewTask}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default Tasks;
