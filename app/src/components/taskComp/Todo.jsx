"use client";

import { Typography, Button, Grid, Divider } from "@mui/material";
import { useContext, useState } from "react";
import { TheContext } from "../../context/TaskContext";
import IconButton from "@mui/material/IconButton";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";

export default function Todo({ data }) {
  const [showDeleteDialog, setshowDeleteDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [titleValue, setTitleValue] = useState(data.title);
  const [descValue, setDescValue] = useState(data.desc);
  const [todoArr, setTodoArr] = useContext(TheContext);

  function AddToCompleted() {
    const loopForId = todoArr.map((el) => {
      if (el.id == data.id) {
        return { ...el, isCompleted: !el.isCompleted };
      }
      return el;
    });
    setTodoArr(loopForId);
  }

  function updateTask() {
    if (titleValue != "") {
      const loopForId = todoArr.map((el) => {
        if (el.title == data.title && el.desc == data.desc) {
          return { ...el, title: titleValue, desc: descValue };
        }
        return el;
      });
      handleUpdateClose();
      setTodoArr(loopForId);
    } else {
      alert("Contenue The Fields")
    }
  }

  function deleteTask() {
    const loopForId = todoArr.filter((el) => {
      return el.id !== data.id;
    });
    setTodoArr(loopForId);
  }

  function handleDeleteValue() {
    setshowDeleteDialog(true);
  }

  function handleDeleteClose() {
    setshowDeleteDialog(false);
  }

  function handleUpdateValue() {
    setShowUpdateDialog(true);
  }

  function handleUpdateClose() {
    setShowUpdateDialog(false);
    setTitleValue(data.title);
    setDescValue(data.desc);
  }

  return (
    <>
      <Dialog
        open={showDeleteDialog}
        onClose={handleDeleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Card>
          <CardContent>
            <div style={{ textAlign: "right" }}>
              <Typography sx={{ p: "10px" }}>
                Are You Sure That You Need To Delete
              </Typography>
            </div>
            <Divider />
            <div>
              <Typography
                sx={{
                  opacity: ".7",
                  textAlign: "center",
                  fontSize: "15px",
                  p: "10px",
                }}
              >
                You Cannot Undo The Deletion If You Clicked "Delete".
              </Typography>
            </div>
          </CardContent>
          <Divider />
          <CardActions>
            <Grid container sx={{ width: "50%" }}>
              <Grid size={5}>
                <Button onClick={deleteTask} variant="contained">
                  Make
                </Button>
              </Grid>
              <Grid size={7}>
                <Button onClick={handleDeleteClose} variant="outlined">
                  No
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Dialog>

      <Dialog
        open={showUpdateDialog}
        onClose={handleUpdateClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Card>
          <CardContent>
            <div style={{ textAlign: "right" }}>
              <Typography sx={{ p: "10px" }}>Update Your Task</Typography>
            </div>
            <Divider />
            <div>
              <Grid container>
                <Grid size={12}>
                  <TextField
                    value={titleValue}
                    onChange={(e) => setTitleValue(e.target.value)}
                    sx={{ width: "100%", m: "10px 0" }}
                    label="Title"
                    variant="outlined"
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    value={descValue}
                    onChange={(e) => setDescValue(e.target.value)}
                    sx={{ width: "100%", m: "10px 0" }}
                    label="Discrebtion"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </div>
          </CardContent>
          <Divider />
          <CardActions>
            <Grid container sx={{ width: "50%" }}>
              <Grid size={5}>
                <Button
                  onClick={() => {
                    updateTask();
                  }}
                  variant="contained"
                >
                  Make
                </Button>
              </Grid>
              <Grid size={7}>
                <Button onClick={handleUpdateClose} variant="outlined">
                  No
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Dialog>

      <Grid
        container
        sx={{
          bgcolor: "#424242",
          borderRadius: "10px",
          p: "20px",
          m: "20px 0",
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          "&:hover": {
            padding: "30px 20px",
            boxShadow:
              "0px 2px 1px -1px rgba(0, 0, 0, 0.40),0px 1px 1px 0px rgba(0, 0, 0, 0.30),0px 1px 3px 0px rgba(0,0,0,0.25)",
          },
          transition: ".4s",
          transitionDelay: ".4s",
        }}
      >
        <Grid
          size={4}
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <IconButton
            onClick={() => {
              handleDeleteValue();
            }}
            sx={{
              color: "#f9a825",
              backgroundColor: "#fff",
              border: "1px solid #f9a825",
            }}
          >
            <DeleteIcon sx={{ fontSize: "15px" }} />
          </IconButton>
          <IconButton
            onClick={() => {
              handleUpdateValue();
            }}
            sx={{
              color: "#558b2f",
              backgroundColor: "#fff",
              border: "1px solid #558b2f",
            }}
          >
            <ModeEditOutlineOutlinedIcon sx={{ fontSize: "15px" }} />
          </IconButton>
          <IconButton
            onClick={() => {
              AddToCompleted();
            }}
            sx={
              data.isCompleted
                ? {
                    color: "#fff",
                    backgroundColor: "#651fff",
                    border: "1px solid #fff",
                  }
                : {
                    color: "#651fff",
                    backgroundColor: "#fff",
                    border: "1px solid #651fff",
                  }
            }
          >
            <CheckOutlinedIcon sx={{ fontSize: "15px" }} />
          </IconButton>
        </Grid>
        <Grid
          size={8}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-end"}
          alignItems={"flex-end"}
          sx={{
            color: "#fff",
          }}
        >
          <Typography sx={{ textAlign: "right", opacity: ".9", fontSize: "17px" }}>
            {data.title}
          </Typography>
          <Typography sx={{ textAlign: "right", opacity: "0.7", fontSize: "11px" }}>
            {data.desc}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
