function ResultBoard({ score, total }) {
  return (
    <div className="result-board">
      <h2>Results</h2>
      <p>
        Correct Answers: <strong>{score}</strong> / {total}
      </p>
      <p>Your grade: <strong>{score === total ? "Excellent!" : score > total/2 ? "Good Job!" : "Try Again!"}</strong></p>
    </div>
  );
}
export default ResultBoard;