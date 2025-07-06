import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Table from "../../components/Table/Table";
import "./MissionsPage.css";

function MissionsPage() {
  const [missionEntries, setMissionEntries] = useState([]);

  const handleFormSubmit = (inputData) => {
    setMissionEntries((prevEntries) => [...prevEntries, inputData]);
  };

  return (
    <div className="missions-container">
      <div className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="primary-title">Space Mission Registration</h1>
          <p className="hero-subtitle">
            Register and track your space exploration missions
          </p>
        </div>
      </div>

      <div className="content-wrapper">
        <section className="registration-section">
          <div className="section-header">
            <h2 className="section-title">Mission Registration</h2>
            <div className="section-divider"></div>
          </div>
          <div className="form-container">
            <Form onSubmit={handleFormSubmit} />
          </div>
        </section>

        <section className="database-section">
          <div className="section-header">
            <h2 className="section-title">Mission Database</h2>
            <div className="section-divider"></div>
          </div>
          <div className="table-container">
            <Table missionEntries={missionEntries} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default MissionsPage;
