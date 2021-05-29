const LoginRightBanner = () => {


    return(
        <div className="col-lg-12 col-sm-12">
        <div className="col-lg-6 col-sm-12" style={{ height: "100%" }}>
        <div className="container container-fluid">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <h1
                style={{
                  paddingLeft: "4%",
                  marginTop: "5%",
                  fontSize: "3.2rem",
                  color: "#2D62ED",
                  marginBottom: "5%",
                }}
              >
                CONNECT YOUR STATIC WEBSITE WITH DATABASE
              </h1>
            </div>
            <div className="col-lg-12 col-sm-12" style={{ marginBottom: "4%" }}>
              <p style={{ fontSize: "1.1rem", paddingLeft: "4%" }}>
                Make seamless integrations of your forms on static websites to
                the database. Keep track of all your projects at one place.
                Specially built for Contact-Me pages
              </p>
            </div>
            <div className="row" style={{ paddingLeft: "4%" }}>
              <div className="col-lg-6 col-sm-12">
                <h2 style={{ color: "#2E62ED" }}>Easy to Integrate</h2>
                <p style={{ fontSize: "1rem" }}>
                  Just Configure on Beyond Static and add a function to the JS.
                  Integration has never been this hassle-free
                </p>
              </div>
              <div className="col-lg-6 col-sm-12">
                <h3 style={{ color: "#2E62ED" }}>Multiple Projects</h3>
                <p style={{ fontSize: "1rem" }}>
                  Set up and track multiple website projects with incoming form
                  data. Interactive dashboard to manage like a boss
                </p>
              </div>
            </div>
            <div className="col-lg-12 col-sm-12" style={{marginTop: '4%', marginBottom: '2%'}}>
                <div className="text-center container container-fluid"><img src="./images/signup.svg" className="img img-fluid" alt="db"/></div>
            </div>
          </div>
        </div>
        </div>
        </div>


    )

}

export default LoginRightBanner