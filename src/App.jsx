import React, { useState } from 'react';

const App = () => {
  const [nameValue, setNameValue] = useState("");
  const [nameValidation, setNameValidation] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [emailValidation, setEmailValidation] = useState(false);
  const [emailRegexVal, setEmailRegexVal] = useState(false);

  const [passwordValue, setPasswordValue] = useState("");
  const [repeatPasswordValue, setRepeatPasswordValue] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const checkValidation = (e) => {
    e.preventDefault();

    setNameValidation(!nameValue.trim());

    setEmailValidation(!emailValue.trim());

    if (emailValue.trim()) {
      checkEmailRegEx();
    }

    if (!passwordValue.trim() || passwordValue !== repeatPasswordValue) {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
      setSubmitted(true);
    }
  };

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
    setNameValidation(false);
  };

  const checkEmailRegEx = () => {
    const mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    setEmailRegexVal(!emailValue.match(mailformat));
  };

  const checkPasswordRegEx = () => {
    const passwordFormat = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;
    setPasswordValidation(!passwordValue.match(passwordFormat));
  };

  return (
    <div>

      <form className="mx-auto p-3 m-3 bg-body-secondary rounded-2">
        <h1 className='text-center'>Login</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Name:</label>
          <input type="text" onChange={handleNameChange} value={nameValue} className="form-control" placeholder="Enter Name" />
          {nameValidation && <p style={{ color: "red" }}>This field is required</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email:</label>
          <input
            type="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            className="form-control"
            placeholder="email@example.com"
          />
          {emailValidation && <p style={{ color: "red" }}>This field is required</p>}
          {emailRegexVal && <p style={{ color: "red" }}>Invalid Email</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Password:</label>
          <input
            type="password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            className="form-control"
            placeholder="Enter Password"
          />
          {passwordValidation && <p style={{ color: "red" }}>Password should contain at least 8 characters, including one letter and one number</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Repeat Password:</label>
          <input
            type="password"
            value={repeatPasswordValue}
            onChange={(e) => setRepeatPasswordValue(e.target.value)}
            className="form-control"
            placeholder="Enter Repeat Password"
          />
          {passwordValidation && <p style={{ color: "red" }}>Passwords do not match or are empty</p>}
        </div>
        <button className='btn btn-success w-100' onClick={checkValidation}>Add</button>
      </form>

      {submitted && (
        <div className="submitted mx-auto p-3 m-3 bg-success-subtle text-emphasis-success rounded-2">
          <h1 className='text-center fs-3'>Submitted Information</h1>
          <p>Name: {nameValue}</p>
          <p>Email: {emailValue}</p>
        </div>
      )}

    </div>
  );
};

export default App;