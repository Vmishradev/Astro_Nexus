import React, { useState } from "react";
import "./Form.css";

function Form({ onSubmit }) {
  const [inputData, setInputData] = useState({
    name: "",
    type: "",
    breed: "",
    customer: "",
    email: "",
    number: "",
  });

  const handleValue = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    onSubmit(inputData);
    setInputData({
      name: "",
      type: "",
      breed: "",
      customer: "",
      email: "",
      number: "",
    });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="mission-form">
        <div className="form-grid">
          <div className="input-group">
            <label htmlFor="name" className="input-label">
              Mission Name
              <span className="required-indicator">*</span>
            </label>
            <input
              id="name"
              value={inputData.name}
              onChange={handleValue}
              type="text"
              placeholder="Enter mission name"
              name="name"
              className={`form-input`}
            />
          </div>

          <div className="input-group">
            <label htmlFor="type" className="input-label">
              Mission Category
              <span className="required-indicator">*</span>
            </label>
            <select
              id="type"
              value={inputData.type}
              onChange={handleValue}
              name="type"
              className={`form-select`}
            >
              <option value="">Select mission category</option>
              <option value="Deep Space Exploration">
                Deep Space Exploration
              </option>
              <option value="Planetary Research">Planetary Research</option>
              <option value="Stellar Observation">Stellar Observation</option>
              <option value="Satellite Deployment">Satellite Deployment</option>
              <option value="Space Station Operations">
                Space Station Operations
              </option>
              <option value="Lunar Exploration">Lunar Exploration</option>
            </select>
          </div>

          <div className="input-group full-width">
            <label htmlFor="breed" className="input-label">
              Mission Objective
              <span className="required-indicator">*</span>
            </label>
            <textarea
              id="breed"
              value={inputData.breed}
              onChange={handleValue}
              placeholder="Describe the primary mission objective and goals"
              name="breed"
              className={`form-textarea`}
              rows="3"
            />
          </div>

          <div className="input-group">
            <label htmlFor="customer" className="input-label">
              Your Name
              <span className="required-indicator">*</span>
            </label>
            <input
              id="customer"
              value={inputData.customer}
              onChange={handleValue}
              placeholder="Enter your full name"
              name="customer"
              type="text"
              className={`form-input`}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Your Email
              <span className="required-indicator">*</span>
            </label>
            <input
              id="email"
              value={inputData.email}
              onChange={handleValue}
              placeholder="Enter your email address"
              name="email"
              type="email"
              className={`form-input`}
            />
          </div>

          <div className="input-group">
            <label htmlFor="number" className="input-label">
              Your Phone Number
              <span className="required-indicator">*</span>
            </label>
            <input
              id="number"
              value={inputData.number}
              onChange={handleValue}
              placeholder="Enter your phone number"
              name="number"
              type="tel"
              className={`form-input`}
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            <span className="button-content">
              <span className="button-icon">🚀</span>
              Register Mission
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
