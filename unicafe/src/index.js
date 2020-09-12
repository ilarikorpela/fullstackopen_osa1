import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.header}</h1>;
};

const Statistical = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistics = ({ statistical, good, bad, neutral }) => {
  const sum = () => {
    return good + neutral + bad;
  };

  const averageCalc = () => {
    const value = good * 1 + neutral * 0 + bad * -1;

    const average = value / sum();
    if (sum() === 0) {
      return 0;
    }
    console.log(average);
    return average;
  };

  const positiveCalc = () => {
    if (sum() === 0) {
      return 0;
    }
    return (good / sum()) * 100;
  };
  if (sum() === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <Header header={statistical} />
      <Statistical text="good: " value={good} />
      <Statistical text="neutral: " value={neutral} />
      <Statistical text="bad: " value={bad} />
      <Statistical text="all: " value={sum()} />
      <Statistical text="average: " value={averageCalc()} />
      <Statistical text="positive:  " value={positiveCalc()} />
    </div>
  );
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
      <Statistics
        statistics={statistics}
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
