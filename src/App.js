import Header from "./components/Header";
import QuestionForm from "./components/QuestionForm";
import ResultBoard from "./components/ResultBoard";
import questions from "./data/questions";
import "./styles/styles.css";
import { useState } from "react";
function App() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});
  function handleAnswer(id, userInput) {
    const correct = userInput.trim().toLowerCase() === questions.find(q => q.id === id).answer.toLowerCase();
    setAnswers(a => ({ ...a, [id]: { value: userInput, isCorrect: correct } }));
    setSubmitted(s => ({ ...s, [id]: true }));
  }
  const score = Object.values(answers).filter(a => a.isCorrect).length;
  const isDone = Object.keys(submitted).length === questions.length;
  return (
    <div className="App">
      <Header />
      <div className="question-list">
        {questions.map((q) => (
          <QuestionForm
            key={q.id}
            questionData={q}
            onAnswer={handleAnswer}
            userAnswer={answers[q.id]?.value || ""}
            isCorrect={answers[q.id]?.isCorrect}
            submitted={!!submitted[q.id]}
          />
        ))}
      </div>
      {isDone && <ResultBoard score={score} total={questions.length} />}
    </div>
  );
}
export default App;