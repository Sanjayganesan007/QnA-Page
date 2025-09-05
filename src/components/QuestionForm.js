import { useState } from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

function QuestionForm({ questionData, onAnswer, userAnswer, isCorrect, submitted }) {
  const [input, setInput] = useState("");

  // On submit, call parent handler
  function handleSubmit(e) {
    e.preventDefault();
    onAnswer(questionData.id, input);
    setInput(""); // Optionally clear after submit
  }
  
  return (
    <form className="question-form" onSubmit={handleSubmit}>
      <div className="question-title">{questionData.question}</div>
      <input
        type="text"
        value={input}
        disabled={submitted}
        className={submitted ? (isCorrect ? "input-correct" : "input-wrong") : ""}
        placeholder="Type your answer here"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" disabled={submitted}>Submit</button>
      {submitted && (
        <span className="feedback-icon">
          {isCorrect
            ? <FiCheckCircle style={{ color: "green" }} />
            : <FiXCircle style={{ color: "red" }} />}
        </span>
      )}
    </form>
  );
}
export default QuestionForm;