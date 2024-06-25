import React, { useState } from "react";

const Forum = ({ forum }) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  const closeDetailsCard = () => {
    setSelectedQuestion(null);
  };

  return (
    <div>
      <div className={`chatbot ${chatOpen ? "open" : ""}`}>
        <div className="chatbot-header" onClick={toggleChat}>
          Forum
          <div className="chatbot-toggle">{chatOpen ? "−" : "+"}</div>
        </div>
        {chatOpen && (
          <div className="chatbot-content">
            <div className="chat-container">
              {forum &&
                forum.map(({ id, question, answer }) => (
                  <div key={id} className={`chat ${answer ? "response" : "question"}`} onClick={() => handleQuestionClick(question)}>
                    <div className="chat-bubble">{question}</div>
                    {answer && <div className="chat-bubble response">{answer}</div>}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
      {selectedQuestion && (
        <div className="details-card open">
          <button className="close-button" onClick={closeDetailsCard}>×</button>
          <div className="ask-question">
            <h2>Question</h2>
            <p>{selectedQuestion}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forum;
