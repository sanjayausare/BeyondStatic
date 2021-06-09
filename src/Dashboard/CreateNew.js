import styles from "./CreateNew.module.css";

const CreateNew = () => {
  const newProjHandler = () => {
    window.location = "/createproject";
  };

  const cardClasses = "col-lg-4 col-sm-12" + styles.card;
  return (
    <div
      className={cardClasses}
      style={{
        marginTop: "5%",
        marginLeft: "0",
        boxShadow: "0px 3px 6px #00000029",
        padding: "2%",
        borderRadius: "20px",
        marginRight: "0",
      }}
    >
      <h2 style={{ color: "#2D62ED" }}>Create A New Project</h2>
      <h5 style={{ color: "#2D62ED" }}>Let the Journey Begin</h5>
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-10"></div>
        <div className="col-lg-2 col-md-2 col-sm-2">
          <img
            className="img img-fluid float-right"
            src="./images/plus.svg"
            alt="plus"
            style={{ marginTop: "4%", cursor: "pointer" }}
            onClick={newProjHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNew;
