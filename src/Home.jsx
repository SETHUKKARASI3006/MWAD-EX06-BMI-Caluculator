import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the BMI Calculator App</h1>
      <p>Click below to navigate to the BMI Calculator.</p>
      <Link to="/calculator" className="start-btn">
        Start Calculating BMI
      </Link>
    </div>
  );
}
export default Home;