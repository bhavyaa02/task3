import React, { useState } from "react";

const QuestionForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    if (question.trim() !== "") {
      onSubmit(question);
      setQuestion("");
    }
  };

  return (
    <div>
      <h2>Ask a Question</h2>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here..."
      />
      <button className="primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default QuestionForm;
