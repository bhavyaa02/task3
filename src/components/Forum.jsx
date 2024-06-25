import React, { useState } from "react";


const Forum = ({ forum }) => {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div className="component-container">
      <div className={`chatbot ${chatOpen ? "open" : ""}`}>
        <div className="chatbot-header" onClick={toggleChat}>
          Forum
          <div className="chatbot-toggle">{chatOpen ? "−" : "+"}</div>
        </div>
        <div className="chatbot-content">
          {chatOpen && (
            <div className="chat-container">
              {forum &&
                forum.map(({ id, question, answer }) => (
                  <div key={id} className={`chat ${answer ? "response" : "question"}`}>
                    <div className="chat-bubble">{question}</div>
                    {answer && <div className="chat-bubble response">{answer}</div>}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Forum;
