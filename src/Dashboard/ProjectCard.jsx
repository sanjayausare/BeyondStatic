import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  let activity = false;
  if (props.status === "Active") {
    activity = true;
  }

  console.log(props.projData)

  const blueCard =  <div className={styles.blueCard} style={{ marginTop: "5%" }}>
  <div className="row">
    <div className="col-lg-8 col-sm-8">
      <h2>{props.projData.ProjectName}</h2>
    </div>
    <div className="col-lg-4 col-sm-4" style={{ textAlign: "right" }}>
      <h6>{props.status}</h6>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12 col-sm-12" style={{ fontSize: "16px" }}>
      <p>{props.projData.Description}</p>
    </div>
    <div className="col-lg-12 col-sm-12">
      <p style={{ fontSize: "20px" }}>{props.projData.totalMessages} entries</p>
    </div>
    <div className="col-lg-12 col-sm-12" style={{alignContent: 'right', textAlign: 'right'}}>
    <button onClick={() => {window.location="/project/"+props.projData.id}} type="submit" style={{marginTop: '5%', width: 'auto', paddingTop: '3%', paddingBottom: '3%', borderRadius: '28px', fontSize: '1.3rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', border: 'none'}} >Explore &nbsp; <img src="images/signUpArrow.svg" alt="arrow" className={styles.signUpArrow} /></button>
    </div>
  </div>
</div> 

const pinkCard = <div className={styles.pinkCard} style={{ marginTop: "5%" }}>
<div className="row">
  <div className="col-lg-8 col-sm-8">
    <h2>{props.projData.ProjectName}</h2>
  </div>
  <div className="col-lg-4 col-sm-4" style={{ textAlign: "right" }}>
    <h6>{props.status}</h6>
  </div>
</div>
<div className="row">
  <div className="col-lg-12 col-sm-12" style={{ fontSize: "16px" }}>
    <p>{props.projData.Description}</p>
  </div>
  <div className="col-lg-12 col-sm-12">
    <p style={{ fontSize: "20px" }}>{props.projData.totalMessages} entries</p>
  </div>
</div>
<div className="col-lg-12 col-sm-12" style={{alignContent: 'right', textAlign: 'right'}}>
    <button onClick={() => {window.location="/project/"+props.projData.id}} type="submit" style={{marginTop: '5%', width: 'auto', paddingTop: '3%', paddingBottom: '3%', borderRadius: '28px', fontSize: '1.3rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', border: 'none'}} >Explore &nbsp; <img src="images/signUpArrow.svg" alt="arrow" className={styles.signUpArrow} /></button>
    </div>
</div> 

  return (
   <>{activity ? blueCard : pinkCard}</>
  );
};

export default ProjectCard;
