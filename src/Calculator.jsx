import { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBmi = () => {
    if (!weight || !height || height <= 0 || weight <= 0) {
        alert("Please enter valid weight and height values.");
        setBmi(null);
        setStatus("");
        return;
    }
    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    if (bmiValue < 18.5) {
      setStatus("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setStatus("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setStatus("Overweight");
    } else {
      setStatus("Obesity");
    }
};
    const clearFields = () => {
        setWeight("");
        setHeight("");
        setBmi(null);
        setStatus("");
    };
    return (
        <div className="calculator-container">
            <h2>BMI Calculator</h2>
            <div className="input-group">
                <label htmlFor="weight-input">Weight (kg):</label>
                <input type="number" id="weight-input" value={weight} onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight in kg"/>
            </div>
            <div className="input-group">
                <label htmlFor="height-input">Height (cm):</label>
                <input type="number" id="height-input" value={height} onChange={(e) => setHeight(e.target.value)}   
                placeholder="Enter height in cm"/>
            </div>
            <div className="button-group">
                <button onClick={calculateBmi} className="calculate-btn">Calculate BMI</button>
                <button onClick={clearFields} className="clear-btn">Clear</button>
            </div>
            {bmi && (
                <div className="result">
                    <h3>Your BMI: <b>{bmi}</b></h3>
                    <p>Status: <b>{status}</b></p>
                </div>
            )}            
        </div>
    )
}
export default Calculator;