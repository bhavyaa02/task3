import React, { useState } from "react";
import CompanyDropdown from "./components/CompanyDropdown";
import UpdatesList from "./components/UpdatesList";
import QuestionForm from "./components/QuestionForm";
import Forum from "./components/Forum";
import './App.css';

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [response, setResponse] = useState("");
  const [forum, setForum] = useState([]);
  const [selectedUpdate, setSelectedUpdate] = useState(null);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const companies = [
    { id: 1, name: "Company A" },
    { id: 2, name: "Company B" },
    { id: 3, name: "Company C" },
  ];

  const updates = {
    1: [
      { id: 1, text: "Update 1 for Company A", details: "Details for Update 1" },
      { id: 2, text: "Update 2 for Company A", details: "Details for Update 2" },
    ],
    2: [
      { id: 3, text: "Update 1 for Company B", details: "Details for Update 1" },
      { id: 4, text: "Update 2 for Company B", details: "Details for Update 2" },
    ],
    3: [
      { id: 5, text: "Update 1 for Company C", details: "Details for Update 1" },
      { id: 6, text: "Update 2 for Company C", details: "Details for Update 2" },
    ],
  };

  const handleQuestionSubmit = (question) => {
    const newQuestion = {
      id: forum.length + 1,
      companyId: selectedCompany,
      question,
      answer: "",
    };
    setForum([...forum, newQuestion]);
    setResponse("Question submitted successfully");
    setShowQuestionForm(false);
    setShowDetails(false); // Close the Details section after submission
  };

  const handleAnswerSubmit = (id, answer) => {
    setForum(forum.map((q) => (q.id === id ? { ...q, answer } : q)));
  };

  const handleUpdateClick = (updateId) => {
    setSelectedUpdate(updateId);
    setShowDetails(true); // Show the Details section when a notification is clicked
  };

  const closeDetails = () => {
    setShowDetails(false);
    setShowQuestionForm(false);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Notifications</h1>
      <div className="row">
        <div className="col-md-6">
          <CompanyDropdown
            companies={companies}
            selectedCompany={selectedCompany}
            setSelectedCompany={setSelectedCompany}
          />
          {selectedCompany && (
            <>
              <UpdatesList
                updates={updates[selectedCompany]}
                onClickUpdate={handleUpdateClick}
              />
              {response && <p className="text-success">{response}</p>}
            </>
          )}
        </div>
        <div className="col-md-6">
          {showDetails && selectedUpdate && (
            <div className="details-card">
              <button className="close-button" onClick={closeDetails}>×</button>
              <h2>Details</h2>
              <p>{updates[selectedCompany].find((update) => update.id === selectedUpdate)?.details}</p>
              {showQuestionForm ? (
                <QuestionForm onSubmit={handleQuestionSubmit} />
              ) : (
                <button className="primary" onClick={() => setShowQuestionForm(true)}>
                  Add a Question
                </button>
              )}
            </div>
          )}
          <Forum forum={forum} onAnswerSubmit={handleAnswerSubmit} />
        </div>
      </div>
    </div>
  );
};

export default App;
