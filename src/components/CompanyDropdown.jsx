import React from "react";

const CompanyDropdown = ({
  companies,
  selectedCompany,
  setSelectedCompany,
}) => {
  if (!companies || !Array.isArray(companies)) {
    return null; // or display a message indicating no companies are available
  }

  return (
    <div className="component-container">
      <label className="form-label">Applied Companies:</label>
      <select
        className="form-select"
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
      >
        <option value="">--Select Company--</option>
        {companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CompanyDropdown;
