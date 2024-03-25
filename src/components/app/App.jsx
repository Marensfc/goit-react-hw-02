import css from "./App.module.css";
import { useState, useEffect } from "react";

import Description from "../description/Description";
import Options from "../options/Options";
import Feedback from "../feedback/Feedback";
import Notification from "../notification/Notification";

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");

    if (savedFeedback !== null) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: (feedback[feedbackType] += 1),
    });
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    window.localStorage.removeItem("saved-feedback");
  };

  return (
    <div className={css.appContainer}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
