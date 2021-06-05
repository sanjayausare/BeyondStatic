import styles from "./Overview.module.css";
import Chart from "./Chart";
import Info1 from "./Info1";
import Info2 from "./Info2";

const Overview = () => {
  return (
    <div
      style={{
        marginTop: "5%",
        marginLeft: "2%",
        marginRight: "2%",
        padding: "0",
        marginBottom: "3%",
      }}
      className="container container-fluid"
    >
      <h2
        className={styles.myProj}
        style={{ margin: "0", padding: "0", display: "inline-block" }}
      >
        <strong>Overview:</strong>
      </h2>
      <div className="row container-fluid" style={{ marginTop: "3%" }}>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <Chart />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="col-lg-12 col-md-12 col-sm-12" style={{margin: '7% auto'}}>
            <Info1 />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12" style={{margin: '7% auto'}}>
            <Info2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
