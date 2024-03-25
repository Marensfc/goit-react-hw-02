import css from "./Feedback.module.css";

const Feedback = ({ feedback: { good, neutral, bad }, totalFeedback }) => {
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <div className={css.feedbackContainer}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
