import ReactDOM from "react-dom";
import React, { useState } from "react";

const Display = (props) => <div>{props.value}</div>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Header = (props) => {
  return <h1>{props.header}</h1>;
};
const App = () => {
  // tallenna napit omaan tilaansa
  const header = "Give feedback";
  const statistics = "Statistics";
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodGrade = () => {
    const newGoodGrade = good + 1;
    setGood(newGoodGrade);
  };

  const handleNeutralGrade = () => {
    const newNeutralGrade = neutral + 1;
    setNeutral(newNeutralGrade);
  };

  const handleBadGrade = () => {
    const newBadGrade = bad + 1;
    setBad(newBadGrade);
  };

  return (
    <div>
      <Header header={header} />
      <button onClick={handleGoodGrade}>good</button>
      <button onClick={handleNeutralGrade}>neutral</button>
      <button onClick={handleBadGrade}>bad</button>
      <Header header={statistics} />
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
