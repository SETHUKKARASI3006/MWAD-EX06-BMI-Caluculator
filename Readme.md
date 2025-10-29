# Ex06 BMI Calculator
## Date: 29-10-2025

## AIM
To create a BMI calculator using React Router 

## ALGORITHM
### STEP 1 State Initialization
Manage the current page (Home or Calculator) using React Router.

### STEP 2 User Input
Accept weight and height inputs from the user.

### STEP 3 BMI Calculation
Calculate the BMI based on user input.

### STEP 4 Categorization
Classify the BMI result into categories (Underweight, Normal weight, Overweight, Obesity).

### STEP 5 Navigation
Navigate between pages using React Router.

## PROGRAM

App.jsx:

```
import './App.css';
import Home from './Home';
import Calculator from './Calculator';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link> | <Link to="/calculator">Calculator</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/calculator' element={<Calculator />}/>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
```

```
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
```

```
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
```

## OUTPUT


## RESULT
The program for creating BMI Calculator using React Router is executed successfully.
