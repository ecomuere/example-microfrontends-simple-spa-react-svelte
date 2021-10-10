import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Root(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-between",
          padding: "15px 10px",
          marginBottom: "20px",
          backgroundColor: "#01f",
        }}
      >
        <Router>
          <Link to="/">
            <div
              style={{
                color: "white",
                textDecoration: "pointer",
                fontSize: "verdana",
              }}
            >
              HOME
            </div>
          </Link>
          <Link to="/rc">
            <div
              style={{
                color: "white",
                textDecoration: "pointer",
                fontSize: "verdana",
              }}
            >
              RC
            </div>
          </Link>
          <Link to="/bpm">
            <div
              style={{
                color: "white",
                textDecoration: "pointer",
                fontSize: "verdana",
              }}
            >
              BPM
            </div>
          </Link>
          <Link to="/DD">
            <div
              style={{
                color: "white",
                textDecoration: "pointer",
                fontSize: "verdana",
              }}
            >
              DD
            </div>
          </Link>
        </Router>
      </div>
    </>
  );
}
