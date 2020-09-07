import ReactDOM from "react-dom";
import React, { useState } from "react";

const Header = (props) => {
  return <h1>{props.header}</h1>;
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
  const header = "Give feedback";
  const statistics = "Statistics";
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodGrade = () => setGood(good + 1);
  const neutralGrade = () => setNeutral(neutral + 1);
  const badGrade = () => setBad(bad + 1);

  return (
    <div>
      <Header header={header} />
      <Button handleClick={goodGrade} text="Good" />
      <Button handleClick={neutralGrade} text="Neutral" />
      <Button handleClick={badGrade} text="Bad" />
      <Header header={statistics} />
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
