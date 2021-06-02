import {useState} from 'react'
import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  let activity = false;
  if (props.status === "Active") {
    activity = true;
  }

  const blueCard =  <div className={styles.blueCard} style={{ marginTop: "5%" }}>
  <div className="row">
    <div className="col-lg-8 col-sm-8">
      <h2>Project Name</h2>
    </div>
    <div className="col-lg-4 col-sm-4" style={{ textAlign: "right" }}>
      <h6>{props.status}</h6>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12 col-sm-12" style={{ fontSize: "22px" }}>
      <p>Description</p>
    </div>
    <div className="col-lg-12 col-sm-12">
      <p style={{ fontSize: "20px" }}>13 Entries</p>
    </div>
  </div>
</div> 

const pinkCard = <div className={styles.pinkCard} style={{ marginTop: "5%" }}>
<div className="row">
  <div className="col-lg-8 col-sm-8">
    <h2>Project Name</h2>
  </div>
  <div className="col-lg-4 col-sm-4" style={{ textAlign: "right" }}>
    <h6>{props.status}</h6>
  </div>
</div>
<div className="row">
  <div className="col-lg-12 col-sm-12" style={{ fontSize: "22px" }}>
    <p>Description</p>
  </div>
  <div className="col-lg-12 col-sm-12">
    <p style={{ fontSize: "20px" }}>13 Entries</p>
  </div>
</div>
</div> 

  return (
   <>{activity ? blueCard : pinkCard}</>
  );
};

export default ProjectCard;
