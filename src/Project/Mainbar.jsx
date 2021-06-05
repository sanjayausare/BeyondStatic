import React from "react";
import refresh from "../assets/refresh.svg";
import edit from "../assets/edit.svg";
import deleteit from "../assets/delete.svg";
import pinkDot from "../assets/pinkDot.svg";
import greenDot from "../assets/greenDot.svg";
import { useState, useEffect } from "react";
import AlertDialogSlide from "./AlertDialogSlide";
import axios from "axios";
import { getURL, getUsername, getToken } from "../utils/index";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

export default function Mainbar(props) {
  const [errorCode, setErrorCode] = useState(0);
  const token = getToken();
  const username = getUsername();
  const url = getURL();

  const [wantToDelete, setWantToDelete] = useState(false)

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const noHandleClose = () => {
    setOpen(false);
    window.location = "/project/"+props.id
  }

  const yesHandleClose = () => {
    setOpen(false)

    axios
      .delete(url + "/api/project/" + props.id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          if(response.data.status === "202 Accepted")
          {
            window.location = "/dashboard"
          }
          else
          {
            alert('Some Error Occurred. We got this.')
            window.location = "/project/"+props.id
          }
        }
      })
      .catch(
        () => {
        alert('Some Error Occurred. We got this.')
        window.location = "/project/"+props.id
        });
  }

  const confirmDeleteDialog = (
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"You have been Warned"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to delete this project? Once you do, there's no going back.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={noHandleClose} color="primary">
            No
          </Button>
          <Button onClick={yesHandleClose} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
  );

  const refreshHandler = () => {
    window.location = "/project/" + props.id;
  };

  const editHandler = () => {
    window.location = "/editproject/" + props.id;
  };

  const statusHandler = () => {
    const body = {
      ProjectName: props.projectName,
      EndpointURL: props.projectURL,
      Field1Name: props.field1,
      Field2Name: props.field2,
      Field3Name: props.field3,
      Field4Name: props.field4,
      Field5Name: props.field5,
      Description: props.projectDesc,
      ProjectStatus: !props.projectStatus,
    };

    axios
      .put(url + "/api/project/" + props.id, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          window.location = "/project/" + props.id;
        }
      })
      .catch(setErrorCode(1));
  };

  const deleteHandler = () => {
    setWantToDelete(true)
  }

  return (
    <div className="col-lg-12 col-md-12 col-sm-12" style={{ margin: "5% 0" }}>
      {wantToDelete ? confirmDeleteDialog : null}
      {errorCode === 1 ? (
        <AlertDialogSlide
          projID={props.id}
          title="Some Error Occurred"
          body="We'll fix this. Please try again later"
        />
      ) : null}
      <br />
      <div
        className="row container-fluid"
        style={{
          backgroundColor: "#2D62ED",
          borderRadius: "20px",
          margin: "0",
          padding: "2% auto",
        }}
      >
        <div className="col-lg-9 col-md-9 col-sm-12">
          <h1 style={{ color: "#fff", padding: "auto 1%" }}>
            {props.projectName}
          </h1>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 text-center">
          <img
            src={refresh}
            onClick={refreshHandler}
            alt="refresh"
            className="img img-fluid"
            width="40%"
            style={{ margin: "5%", maxWidth: "30px" }}
          />
          <img
            src={edit}
            alt="edit"
            onClick={editHandler}
            className="img img-fluid"
            width="40%"
            style={{ margin: "5%", maxWidth: "30px" }}
          />
          <img
            src={deleteit}
            alt="delete"
            onClick={deleteHandler}
            className="img img-fluid"
            width="40%"
            style={{ margin: "5%", maxWidth: "30px" }}
          />
          {props.projectStatus ? (
            <img
              src={greenDot}
              alt="project active"
              onClick={statusHandler}
              className="img img-fluid"
              width="40%"
              style={{ margin: "5%", maxWidth: "30px" }}
            />
          ) : (
            <img
              src={pinkDot}
              alt="project inactive"
              onClick={statusHandler}
              className="img img-fluid"
              width="40%"
              style={{ margin: "5%", maxWidth: "30px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
